import { cn } from "@/lib/utils";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/r842HelLUm8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Loader({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-4 h-[60vh] p-4 flex-wrap items-center justify-center",
        className
      )}
    >
      <img
        className="w-20 h-20 animate-spin"
        src="https://www.svgrepo.com/show/474682/loading.svg"
        alt="Loading icon"
      />
    </div>
  );
}
