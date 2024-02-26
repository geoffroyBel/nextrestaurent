import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/app/path";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderTopics = topics.map((t) => (
    <div key={t.id}>
      <Chip color="warning" variant="shadow">
        <Link href={paths.topicShow(t.slug)}>{t.slug}</Link>
      </Chip>
    </div>
  ));

  return <div className="flex flex-row flex-wrap gap-2">{renderTopics}</div>;
}
