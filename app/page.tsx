import memesData from "./memes";
import TableContent from "./TableContent";

const rows = memesData;

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "NAME" },
  { key: "image", label: "IMAGE" },
  { key: "likes", label: "LIKES" },
  { key: "action", label: "ACTION" },
];

export default function Home() {
  return <TableContent columns={columns} rows={rows} />;
}
