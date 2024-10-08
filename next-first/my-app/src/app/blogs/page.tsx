import Link from "next/link";

const Blogs = async () => {
  let news: any = await fetch(
    "https://api.thenewsapi.com/v1/news/top?api_token=4kg9t6R9h2j1gFnP6oerJz0h6BHr9ZebTXA3GUl6&locale=us&limit=3"
  );
  news = await news.json();

  return (
    <>
      <div>
        {news?.data.map((data: any) => (
          <Link
            href={`/blogs/${data.uuid}`}
            key={data.uuid}
            className="border m-2 rounded p-4 flex"
          >
            <img src={data.image_url} className="h-20 w-20 rounded" />
            <div>
              <h1>{data?.title}</h1>
              <h1>{data?.description}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blogs;
