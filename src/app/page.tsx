import { TableDemo } from '@/components/tests/TestTable';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button className="">test shadcn ui</Button>
      <TableDemo />
    </main>
  );
}
