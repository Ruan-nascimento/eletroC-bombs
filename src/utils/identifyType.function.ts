export default function IdentifyType(type: string) {
  switch (type) {
    case 'CAPACITOR':
    return 'uf';
  
    case 'AMP':
      return 'A';    
  }
}