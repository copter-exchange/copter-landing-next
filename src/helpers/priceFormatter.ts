
interface PriceFormatterProps {
  number: number;
  locale?: string;
}

export const saldoFormatter = ({number, locale = "es-ES"}: PriceFormatterProps) => {
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  });
  return formatter.format(number);
};