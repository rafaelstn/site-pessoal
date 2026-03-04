import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-10 bg-surface border-t border-ink/8">
      <div className="flex justify-center">
        <Image
          src="/rafael.png"
          alt="Rafael Damasceno"
          width={200}
          height={90}
          className="h-14 w-auto"
        />
      </div>
    </footer>
  );
}
