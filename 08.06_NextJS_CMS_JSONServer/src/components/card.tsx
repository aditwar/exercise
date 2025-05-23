import { splitStr } from "@/helper/splitStr"
import Link from "next/link"

interface ICardBlog {
    title: string
    image: string
    avatar: string
    email: string
    author: string
    slug: string
}

export const CardBlog: React.FC<ICardBlog> = ({ title, image, avatar, email, author, slug }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-[200px] w-full " src={`https:${image}`} alt={title} />
          <div className="p-4">
              <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{splitStr(title, 50)}</h5>
              <div className="flex items-center my-5">
                    <div className="flex-shrink-0">
                        <img className="w-10 h-10 rounded-full" src={`https:${avatar}`} alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {author}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {email}
                        </p>
                    </div>
                </div>
              <Link href={`/about-us/${slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </Link>
          </div>
      </div>
    )
}