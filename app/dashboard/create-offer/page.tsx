import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/text-area';

export default function Page() {
  return (
    <main className="flex flex-col gap-8">
      <h2 className="font-bold">Nueva oferta de trabajo</h2>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Introduce el título de la oferta</Label>
          <Input name="title" placeholder="Frontend developer.." type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="description">
            Indica los requerimientos de la oferta
          </Label>
          <Textarea name="description" />
        </div>
      </form>
    </main>
  );
}
