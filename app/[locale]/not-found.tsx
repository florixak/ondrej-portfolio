import AnimationWrapper from "@/components/AnimationWrapper";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
  const t = await getTranslations("common");
  return (
    <AnimationWrapper duration={0.2} delay={0.2}>
      <section className="flex-center flex-col w-full h-[50vh] p-4 text-center">
        <h2 className="text-6xl font-bold text-center mb-4 italic text-foreground">
          {t("notFound.title")}
        </h2>
        <p className="text-lg text-muted-foreground mb-4 max-w-md">
          {t("notFound.description")}
        </p>
        <Button asChild variant="outline">
          <Link href="/">{t("notFound.buttonText")}</Link>
        </Button>
      </section>
    </AnimationWrapper>
  );
}
