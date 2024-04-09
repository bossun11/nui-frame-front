import DiaryCard from "@/components/ui/diary/DiaryCard";
import React from "react";

const Diaries = () => {
  return (
    <div className=" h-screen p-4">
      <h2 className="text-3xl m-4 text-center">旅の思い出</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <DiaryCard />
        <DiaryCard />
        <DiaryCard />
      </div>
    </div>
  );
};

export default Diaries;
