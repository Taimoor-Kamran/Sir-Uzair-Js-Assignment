
import Image from "next/image";

const BlogDetail = async ({ params }:any) => {
  let news = await fetch(
    `https://api.thenewsapi.com/v1/news/uuid/${params.uuid}`, caches: "no-caches" 
  );
  news = await news.json();

  console.log(params)
  return (
    <div>
        <Image
        alt="This is Image" 
        className="mx-auto my-10"
        src={news.image_url} height={100}
        width={500} objectFit="contain" />
      <h1 className="text-center font-bold text-4xl">{news?.title}</h1>
      <h1 className="text-center">{news?.description}</h1>
    </div>
  );
};

export default BlogDetail;