import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

export default async function Home() {
  const dir = path.join(process.cwd(), 'src', 'content');
  const files = fs.readdirSync(dir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const mod = await import(`../content/${slug}.mdx`);
      return { slug, metadata: mod.metadata };
    }),
  );

  return (
    <div className='w-full min-h-screen flex flex-col bg-black/5 items-center px-4 py-8'>
      <div className='max-w-6xl w-full grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 grid'>
        {posts.map((post) => (
         <div key={post.slug} className='border border-black/10 rounded-lg shadow-md flex flex-col'>
         <Image
           src={post.metadata.image || `/posts/og-image?title=${encodeURIComponent(post.metadata.title)}`}
           alt={post.metadata.title}
           className='w-full object-cover rounded-t-lg mb-4 aspect-[1200/630]'
           width={1200}
           height={630}
         />
         <div className='p-4 flex flex-col flex-grow'>
           <h2 className='text-2xl font-bold mb-2'>
             <Link href={`/posts/${post.slug}`}>{post.metadata.title}</Link>
           </h2>
           <p className='text-gray-600 mb-4 flex-grow'>{post.metadata.description}</p>
       
           <div className='flex items-center gap-4 mt-auto'>
             <Link
               href={`/posts/${post.slug}`}
               className='text-blue-500 hover:underline text-base font-medium'>
               Read more
             </Link>
       
             {post.metadata.type && (
               <span className='text-sm text-white bg-yellow-500 px-2 py-1 rounded'>
                 {post.metadata.type}
               </span>
             )}
           </div>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
}
