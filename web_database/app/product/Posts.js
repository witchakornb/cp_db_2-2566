'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./product.css";
import axios from 'axios';
import { useState, useEffect } from "react";

const Posts = ({ posts }) => {

    const [allPosts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_IP}/user/show_all_item_big`);
                const { Fertilizer, Chemicals, Other, Craft } = response.data;
                const fertilizers = Fertilizer || [];
                const chemicals = Chemicals || [];
                const others = Other || [];
                const crafts = Craft || [];
                const allData = [...fertilizers, ...chemicals, ...others, ...crafts];
                console.log(allData);
                setPosts(allData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    console.log("Posts : ", posts);

    const handleDelete = async (post) => {
        try {
            setPosts(posts.filter((p) => p.Item_ItemId != post.Item_ItemId))
            console.log("ItemId : ", post.Item_ItemId);
            const response = await axios.post(`${process.env.NEXT_PUBLIC_IP}/user/show_all_item_big/remove`,
                {
                    ItemId: post.Item_ItemId,
                },
                {
                    withCredentials: true,
                }
            );
            console.log("hihihihihihihi");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="">
            <table class="min-w-full text-center text-sm font-light">
                <thead
                    class="border-b bg-[#777777] font-medium text-white">
                    <tr>
                        <th scope="col" class=" px-6 py-4">#</th>
                        <th scope="col" class=" px-6 py-4">รหัสสินค้า</th>
                        <th scope="col" class=" px-6 py-4">ชื่อสินค้า</th>
                        <th scope="col" class=" px-6 py-4">ประเภท</th>
                        <th scope="col" class=" px-6 py-4">ราคาที่ขาย</th>
                        <th scope="col" class=" px-6 py-4">จำนวน</th>
                        <th scope="col" class=" px-6 py-4">หน่วย</th>
                        <th scope="col" class=" px-6 py-4">แก้ไข</th>
                        <th scope="col" class=" px-6 py-4">ลบ</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={post.Item_ItemId}
                            class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap  px-6 py-4">{index + 1}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.Item_ItemId}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.fertilizerName || post.ChemicalName || post.OtherName || post.Craft_fertilizerName}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.ItemType}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.fertilizerPrice || post.ChemicalPrice || post.OtherPrice || post.Craft_fertilizerPrice}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.ItemAmount}</td>
                            <td class="whitespace-nowrap  px-6 py-4">{post.UnitName}</td>
                            <td class="whitespace-nowrap  px-6 py-4">
                                <div class="">
                                    <Link href={`/edit_customer/${post.Item_ItemId}`}>
                                        <button
                                            class="bg-[#777777] hover:bg-[#008B41] text-white font-bold p-1 rounded inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                                <div class="">
                                    <button onClick={() => handleDelete(post)}
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