export function CompanyBrand({ width = 150 }: { width?: number }) {
  return <img src="/cagos-brand.png" alt="CAGOS" width={171} height={60}
    decoding="async" style={{ display: 'block', width, maxWidth: '100%', height: 'auto', mixBlendMode: 'multiply', flexShrink: 0 }} />
}
