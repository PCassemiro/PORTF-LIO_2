import { Card, CardFooter, Image } from "@nextui-org/react";
interface DadosCardProps {
  titulo: string;
  imagem: string;
}
export default function CardProcess({ titulo, imagem }: DadosCardProps) {
  return (
    <Card
      isFooterBlurred
      className="bg-transparent w-[150px] border-none "
      radius="lg"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={150}
        src={imagem}
        width={150}
      />
      <CardFooter className="justify-between bg-amber-900 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black flex items-center justify-center w-full">
          {titulo}
        </p>
      </CardFooter>
    </Card>
  );
}
