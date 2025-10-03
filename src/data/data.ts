import Cpu from '../assets/Cpu.png'
import Monitor from '../assets/Monitor.png'
import MemoryStick from '../assets/ram.png'
import Microchip from '../assets/Microchip.png'
import HardDrive from '../assets/HardDrive.png'
import Zap from '../assets/Zap.png'

export const featuredProducts = [
    {
      id: '1',
      name: 'NVIDIA GeForce RTX 4080 Super Gaming Graphics Card',
      price: 1199,
      originalPrice: 1399,
      image: 'https://images.unsplash.com/photo-1658673847785-08f1738116f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljcyUyMGNhcmQlMjBHUFV8ZW58MXx8fHwxNzU5MjEyMzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      reviews: 245,
      category: 'GPU',
      isOnSale: true,
    },
    {
      id: '2',
      name: 'Intel Core i9-14900K Desktop Processor',
      price: 589,
      image: 'https://images.unsplash.com/photo-1707921270852-0bc1743a7604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2Nlc3NvciUyMENQVXxlbnwxfHx8fDE3NTkyMTIzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      reviews: 189,
      category: 'CPU',
    },
    {
      id: '3',
      name: 'Corsair Vengeance DDR5 32GB (2x16GB) 5600MHz',
      price: 159,
      originalPrice: 199,
      image: 'https://images.unsplash.com/photo-1724506381599-2a9aa489366f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSQU0lMjBtZW1vcnklMjBtb2R1bGVzfGVufDF8fHx8MTc1OTI0NzQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      reviews: 324,
      category: 'RAM',
      isOnSale: true,
    },
    {
      id: '4',
      name: 'ASUS ROG Strix Z790-E Gaming WiFi 6E Motherboard',
      price: 449,
      image: 'https://images.unsplash.com/photo-1627355263723-42c86ea13fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXJib2FyZCUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NTkyNDc0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.6,
      reviews: 156,
      category: 'Motherboard',
    },
  ];

export const categories = [
    {
      id: 'cpu',
      name: 'Procesadores',
      description: 'Intel, AMD y más',
      icon: Cpu,
      color: 'bg-blue-500',
    },
    {
      id: 'gpu',
      name: 'Tarjetas Gráficas',
      description: 'NVIDIA, AMD Radeon',
      icon: Monitor,
      color: 'bg-green-500',
    },
    {
      id: 'ram',
      name: 'Memoria RAM',
      description: 'DDR4, DDR5',
      icon: MemoryStick,
      color: 'bg-purple-500',
    },
    {
      id: 'motherboard',
      name: 'Motherboards',
      description: 'ASUS, MSI, Gigabyte',
      icon: Microchip,
      color: 'bg-red-500',
    },
    {
      id: 'storage',
      name: 'Almacenamiento',
      description: 'SSD, HDD, NVMe',
      icon: HardDrive,
      color: 'bg-yellow-500',
    },
    {
      id: 'psu',
      name: 'Fuentes de Poder',
      description: 'PSU Modulares',
      icon: Zap,
      color: 'bg-indigo-500',
    },
  ];