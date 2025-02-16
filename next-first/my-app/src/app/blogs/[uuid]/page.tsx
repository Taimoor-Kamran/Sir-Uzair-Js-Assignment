import { notFound } from "next/navigation";

interface News {
  uuid: string;
  title: string;
  desc: string;
  error?: boolean;
}

interface BlogDetailProps {
  params: {
    uuid: string;
  }
}

const BlogDetail = async ({ params }: BlogDetailProps) => {
  let respones = await fetch(`http://localhost:3000/api/blogs/${params.uuid}`, {
    cache: "no-cache",
  });
  let news: News  = await respones.json();

  if(news.error) return notFound();
  return (
    <div>
    <h1 className="text-center font-bold text-4xl">{news?.title}</h1>
    <h1 className="text-center">{news?.desc}</h1>
    </div>
  )
};

export default BlogDetail