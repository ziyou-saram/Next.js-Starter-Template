// "use client";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Locale } from "@/i18n/config";
// import { setUserLocale } from "@/services/locale";
// import { Languages } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useTransition } from "react";

// type Props = {
//   value: string;
//   items: Array<{ value: string; label: string }>;
//   label: string;
// };

// export default function LocaleSwitcherSelect({ value, items, label }: Props) {
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();

//   function onChange(next: string) {
//     const locale = next as Locale;
//     startTransition(async () => {
//       await setUserLocale(locale);
//       router.refresh();
//     });
//   }

//   return (
//     <Select value={value} onValueChange={onChange}>
//       <SelectTrigger
//         className={isPending ? "animate-pulse" : ""}
//         aria-label={label}
//       >
//         <Languages className="h-4 w-4" />
//         <SelectValue placeholder={label} />
//       </SelectTrigger>
//       <SelectContent>
//         {items.map((item) => (
//           <SelectItem key={item.value} value={item.value}>
//             {item.label}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   );
// }

"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";
import { Locale } from "next-intl";
import { useTransition } from "react";

// ВАЖНО: эти хуки берём из твоего i18n/navigation-обёртки next-intl
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

type Props = {
  value: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({ value, items, label }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onChange(next: string) {
    const nextLocale = next as Locale;

    startTransition(() => {
      router.replace(
        // Типы у next-intl гарантируют корректность пары pathname+params для текущего роута.
        // @ts-expect-error см. объяснение в примере next-intl
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={isPending ? "animate-pulse" : ""}
        aria-label={label}
      >
        <Languages className="h-4 w-4" />
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
