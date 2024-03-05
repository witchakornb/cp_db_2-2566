'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "./sale_history.css";
import axios from 'axios';
import EditFertilizer from "../product/edit_fertilizer/[oo]/page";
import { useState, useEffect } from "react";
const Swal = require('sweetalert2')

const Posts = ({ posts }) => {

    const [allPosts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/select_orderGood`);
                console.log("res cus : ", response);
                const posts = response.data;
                setPosts(posts);
                console.log("after set : ", posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    console.log("Posts : ", posts);

    const handleDelete = async (post) => {
        try {
            setPosts(posts.filter((p) => p.OrderId != post.OrderId))
            console.log("OrderId : ", post.OrderId);
            const response = await axios.post(`${process.env.NEXT_PUBLIC_IP}/user/cancel_order`,
                {
                    OrderId: post.OrderId,
                },
                {
                    withCredentials: true,
                }
            );
            console.log("hihihihihihihi");
        } catch (error) {
            console.log(error);
        }

        // รีเฟรชหน้า
        window.location.reload();
    };

    return (
        <div className="">
            <table class="min-w-full text-center text-sm font-light">
                <thead
                    class="border-b bg-[#777777] font-medium text-white">
                    <tr>
                        <th scope="col" class=" px-6 py-4">#</th>
                        <th scope="col" class=" px-6 py-4">เลขที่บิล</th>
                        <th scope="col" class=" px-6 py-4">วันที่ทำรายการ</th>
                        <th scope="col" class=" px-6 py-4">ยอดขาย(บาท)</th>
                        <th scope="col" class=" px-6 py-4">พนักงาน</th>
                        <th scope="col" class=" px-6 py-4">ลูกค้า</th>
                        <th scope="col" class=" px-6 py-4">หมายเหตุ</th>
                        <th scope="col" class=" px-6 py-4">ดูรายละเอียด</th>
                        <th scope="col" class=" px-6 py-4">ยกเลิกรายการ</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={post.OrderId}
                            class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap  px-6 py-4">{index + 1}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.OrderId}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.OrderDate}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.OrderTotalPirce}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.EmployeeName}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.CustomerName}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.OrderNote}</td>
                            <td class="whitespace-nowrap  px-6 py-4">
                                <div class="">
                                    <Link href={{
                                            pathname: `/sale_history/${post.OrderId}`,
                                        }}
                                    >
                                        <button
                                            class="bg-[#777777] hover:bg-[#008B41] text-white font-bold p-1 rounded inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                                <div class="">
                                    <button onClick={() => Swal.fire({
                                        title: "Are you sure?",
                                        text: "You won't be able to revert this!" + post.OrderId,
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonColor: "#3085d6",
                                        cancelButtonColor: "#d33",
                                        confirmButtonText: "Yes, delete it!"
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: "Deleted!",
                                                text: "Your file has been deleted.",
                                                icon: "success"
                                            }
                                            ),
                                                handleDelete(post);
                                        }
                                    })}
                                        class="bg-[#FA0000] hover:bg-[#008B41] text-white font-bold p-1 rounded inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Posts