import {
  CrossCircledIcon,
  StopwatchIcon,
  CheckCircledIcon,
  QuestionMarkCircledIcon, // Assuming a phone icon for call statuses
} from '@radix-ui/react-icons';

// Updated statuses with value equal to label
export const statuses = [
  {
    value: 'Processing',
    label: 'Processing',
    icon: StopwatchIcon,
  },
  {
    value: '1st Call',
    label: '1st Call',
    icon: QuestionMarkCircledIcon,
  },
  {
    value: '2nd Call',
    label: '2nd Call',
    icon: QuestionMarkCircledIcon,
  },
  {
    value: '3rd Call',
    label: '3rd Call',
    icon: QuestionMarkCircledIcon,
  },
  {
    value: 'Declined',
    label: 'Declined',
    icon: CrossCircledIcon,
  },
  {
    value: 'Confirmed',
    label: 'Confirmed',
    icon: CheckCircledIcon,
  },
];

export const deliveryCompanies = [
  {
    value: 'Yalidine',
    label: 'Yalidine',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0u4I1B_WXwoRzIQVz9s_L27bKiFaeCWqT0A&s',
  },
  {
    value: 'Nord et Ouest Express',
    label: 'Nord et Ouest Express',
    logoUrl: 'https://media.licdn.com/dms/image/v2/D4E0BAQGPpu5Qh0jsfw/company-logo_200_200/company-logo_200_200/0/1695329225311?e=1733356800&v=beta&t=MhXnCk6KenoEsgdoklt60RJi034cqON0NohDGie1_oE',
  },
  {
    value: 'Maystro Delivery',
    label: 'Maystro Delivery',
    logoUrl: 'https://media.licdn.com/dms/image/v2/C560BAQHYfllwi1IFdA/company-logo_200_200/company-logo_200_200/0/1643802585466/maystro_delivery_logo?e=1733356800&v=beta&t=QlB_7gRens2RnVJqatWukVGNxOyDqLZLi4i85gf1x9w',
  },
  {
    value: 'ZR Express',
    label: 'ZR Express',
    logoUrl: 'https://media.licdn.com/dms/image/v2/D4D0BAQF2CnWyuWsZ5w/company-logo_200_200/company-logo_200_200/0/1714586796236/zr_express_logo?e=1733356800&v=beta&t=S1b189GdDoTBsUbIZ8Dp8Y9mQFBnjBlTRreRPHHWPe0',
  },
];
