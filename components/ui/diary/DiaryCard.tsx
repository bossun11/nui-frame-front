import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const DiaryCard = () => {
  return (
    <Link href={`/posts/1`}>
      <Card className="shadow-xl rounded-xl mb-5 hover:cursor-pointer">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="w-[210px] h-[140px] relative mb-1 md:w-[300px] md:h-[200px] md:mb-3">
            <Image
              src="/no_image.webp"
              fill={true}
              alt="投稿画像"
              className="rounded-lg"
              priority
              sizes="100vw sm:50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <CardTitle className="text-center text-md md:text-2xl">
            タイトル
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="pl-5">
            <p className="text-sm md:text-lg">投稿内容（50文字まで表示）</p>
            <p className="text-sm md:text-lg">投稿日</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DiaryCard;
