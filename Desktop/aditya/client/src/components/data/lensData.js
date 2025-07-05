export const lenses = [
  {
    id: 1,
    name: 'AquaSoft Contact Lens',
    type: 'Contact',
    price: 799,
    image: 'https://images.unsplash.com/photo-1601031530434-376b6c1f3938',
    description: 'Comfortable daily wear contact lenses.',
  },
  {
    id: 2,
    name: 'ColorPop Lens',
    type: 'Color',
    price: 999,
    image: 'https://images.unsplash.com/photo-1588776814546-52c09ac2e2f8',
    description: 'Vibrant color lenses for a new look.',
  },
  {
    id: 3,
    name: 'PowerVision Lens',
    type: 'Power',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1620921954755-19e744da0042',
    description: 'Powered lenses for clear vision.',
  },
  {
    id: 4,
    name: 'FreshLook Blue',
    type: 'Color',
    price: 1050,
    image: 'https://images.unsplash.com/photo-1581092334119-7c3ca1b3d591',
    description: 'Natural blue tinted contact lenses.',
  },
  {
    id: 5,
    name: 'Daily Comfort Clear',
    type: 'Contact',
    price: 699,
    image: 'https://images.unsplash.com/photo-1580734073584-a6c7de58f5af',
    description: 'Clear lenses for everyday use.',
  },
  {
    id: 6,
    name: 'BioTrue Lens',
    type: 'Contact',
    price: 850,
    image: 'https://images.pexels.com/photos/731191/pexels-photo-731191.jpeg',
    description: 'Hydrating lenses for sensitive eyes.',
  },
  {
    id: 7,
    name: 'ColorVibe Hazel',
    type: 'Color',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507',
    description: 'Hazel colored lenses for a subtle change.',
  },
  {
    id: 8,
    name: 'VisionPlus Power Lens',
    type: 'Power',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
    description: 'High-clarity power lenses.',
  },
  {
    id: 9,
    name: 'OceanBlue Lens',
    type: 'Color',
    price: 990,
    image: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143',
    description: 'Ocean blue colored contacts.',
  },
  {
    id: 10,
    name: 'AirFlex Daily',
    type: 'Contact',
    price: 899,
    image: 'https://images.unsplash.com/photo-1581090700227-4c76f144e127',
    description: 'Lightweight and breathable daily lenses.',
  },
  // Generate the rest programmatically
  ...Array.from({ length: 40 }, (_, i) => {
    const id = i + 11;
    const types = ['Contact', 'Color', 'Power'];
    const colors = ['Green', 'Blue', 'Gray', 'Honey', 'Violet', 'Amber'];
    const type = types[i % 3];
    const color = colors[i % colors.length];
    const baseNames = {
      Contact: ['ClearView', 'PureVision', 'OxyFresh'],
      Color: ['GlamEyes', 'ShadePop', 'BrightIris'],
      Power: ['SharpSight', 'FocusPro', 'ClearFocus'],
    };
    const name = `${baseNames[type][i % 3]} ${type === 'Color' ? color : 'Lens'}`;
    const price = 700 + (i % 10) * 50 + (type === 'Power' ? 100 : 0);
    const imageUrls = [
      'https://images.unsplash.com/photo-1601031530434-376b6c1f3938',
      'https://images.pexels.com/photos/731191/pexels-photo-731191.jpeg',
      'https://images.unsplash.com/photo-1581090700227-4c76f144e127',
      'https://images.unsplash.com/photo-1573497491208-6b1acb260507',
      'https://images.unsplash.com/photo-1580734073584-a6c7de58f5af',
      'https://images.unsplash.com/photo-1522336572468-97b06e8ef143',
      'https://images.unsplash.com/photo-1588776814546-52c09ac2e2f8',
    ];
    const descriptionMap = {
      Contact: 'Soft, flexible lenses for daily wear.',
      Color: `Stylish ${color.toLowerCase()} tinted lenses for all occasions.`,
      Power: 'Precision lenses for vision correction.',
    };
    return {
      id,
      name,
      type,
      price,
      image: imageUrls[i % imageUrls.length],
      description: descriptionMap[type],
    };
  }),
];
