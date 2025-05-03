import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/lib/blog";
import { Metadata } from "next";
import { IBlogs } from "../type";
import { CardBlog } from "@/components/card";


export const metadata: Metadata = {
    title: "Event Commerce | About-us",
    description: "Description About-us"
}

export default async function AboutUsPage() {
    const blogs = await getBlogs()
    return (
        <>
        <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aspernatur labore sed amet nobis ab, quam voluptatibus ad consequuntur a explicabo sit, minus inventore. Excepturi officiis non nisi impedit harum quas veniam expedita? Excepturi voluptates error voluptate officiis? Reprehenderit vero et mollitia cum ea, quae quaerat animi magnam sit, pariatur modi dolores sapiente minus aut delectus debitis blanditiis! Reiciendis, veritatis! Nemo facere quia dolorum dignissimos hic sequi itaque temporibus doloremque ipsam provident perferendis, consequuntur libero at aperiam culpa! Laboriosam iste consequatur officia repudiandae at, facilis ea corporis dolores quam neque consequuntur eos modi eligendi expedita quia eius molestias adipisci ipsam provident quod maiores pariatur blanditiis? Soluta id perspiciatis, vel quaerat modi fugit quasi tenetur, laborum ab illo magni. Ipsum a molestiae nostrum voluptates assumenda quam explicabo cum doloremque fuga aliquid voluptatum consectetur quo dolorum magnam obcaecati nobis dolor commodi culpa dolore veritatis, blanditiis aliquam reprehenderit saepe adipisci! Nam numquam est dolor explicabo quis. Commodi magni corporis quam aperiam, autem repellat sequi dicta maxime quae quibusdam deleniti natus animi ad, dolore consequuntur. Error eaque, illo delectus velit deleniti iusto assumenda animi? Minus aut nobis impedit deleniti enim, accusamus repellat culpa corporis, molestiae at quibusdam illum! Molestiae exercitationem odit quisquam commodi dignissimos tempora quasi mollitia nisi sint enim, ipsam temporibus aperiam assumenda error asperiores officiis. Repellendus tempore dignissimos quidem, enim adipisci quae, sed sunt placeat eveniet, est dolores laborum voluptate aperiam at quos. Et ratione distinctio assumenda, recusandae consectetur facilis impedit ea deleniti reiciendis totam qui voluptatem, quibusdam obcaecati quis veniam consequuntur eos autem dolore. Fugiat velit in porro, quae consequatur, repellat itaque aut, expedita voluptate fuga magni dicta ducimus voluptates pariatur perspiciatis accusantium? Labore cumque, harum provident aperiam consequatur libero officia consequuntur beatae! Eius, tempora neque! Itaque voluptate impedit ea sed, reiciendis ipsam perferendis assumenda esse tempore est, consequuntur facere similique?
        </div>

        <Wrapper>
            <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2">
                {
                blogs.map((items: IBlogs) => {
                    return (
                    <CardBlog 
                        key={items.sys.id}
                        title={items.fields.title} 
                        slug={items.fields.slug} 
                        image={items.fields.image.fields.file.url}
                        avatar={items.fields.author.fields.avatar.fields.file.url}
                        author={items.fields.author.fields.name}
                        email={items.fields.author.fields.email}
                    />
                    )
                })
                }
            </div>
        </Wrapper>

        </>
    )
}