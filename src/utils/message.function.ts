export const messageSwitch = (number: number): string=>{
  switch (number){
    case 2:
      return 'Final';
    case 4:
      return 'Semifinals';
    case 8:
      return 'Quarterfinals';
    case 16:
      return '1/8 finals';
    case 32:
      return '1/16 finals';
    case 64:
      return '1/32 finals';
    case 128:
      return '1/64 finals';
    default:
      return 'First round';
  }
}