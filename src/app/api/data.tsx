export const FeaturesData: {
  imgSrc: string;
  heading: string;
  subheading: string;
}[] = [
    {
      imgSrc: 'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/66a0de26c9ecfecfb834962c_rash%201.svg',
      heading: "Tim mạch",
      subheading: "Tư vấn các bệnh lý huyết áp,tim mạch",
    },
    {
      imgSrc: 'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/66a0de06fa0eae55f3570e1c_mental-health%201.svg',
      heading: "Thần kinh",
      subheading: "Đau đầu, mất ngủ, rối loạn thần kinh",
    },
    {
      imgSrc: 'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/6747f33e1e3d8a0d6358840b_weight-loss.png',
      heading: "Dinh dưỡng & béo phì",
      subheading: "Hướng dẫn chế độ ăn uống phù hợp",
    },
    {
      imgSrc: 'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/66a0df77f6e2323d5bb9f652_bacteria%201.svg',
      heading: "Cơ Xương Khớp",
      subheading: "Vật lý trị liệu, đau vai gáy, đau cột sống",
    }

  ]

export const ExpertData: {
  profession: string;
  name: string;
  imgSrc: string;
  imgSpecialty: string;
  hospital: string;
}[] = [
    {
      profession: 'Bác sĩ Dạ Dày',
      name: 'Nguyễn Văn Minh',
      imgSrc: 'https://res.cloudinary.com/dut4zlbui/image/upload/v1743333685/gqijhsfjqkv0c6xuq3kj.png',
      imgSpecialty: 'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/66a0df77f6e2323d5bb9f652_bacteria%201.svg',
      hospital: 'Bệnh viện Đa khoa Hà Nội'
    },
    {
      profession: 'Chuyên gia Dinh dưỡng',
      name: 'Trần Thị Hạnh',
      imgSrc: 'https://res.cloudinary.com/dut4zlbui/image/upload/v1743333687/k0mifzvergqmadqhcdmo.png',
      imgSpecialty: 'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/6747f5029a341a11b7e8e8d1_weight-loss-32-32.svg',
      hospital: 'Bệnh viện Đa khoa Hà Nội'
    },
    {
      profession: 'Bác sĩ sinh lý',
      name: 'Lê Thị Hương',
      imgSrc: 'https://res.cloudinary.com/dut4zlbui/image/upload/v1743334244/fjirtdmyh3wto08pwgg4.png',
      imgSpecialty: 'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/66a0defd75ce53040ac39795_std%203.svg',
      hospital: 'Bệnh viện Đa khoa Hà Nội'
    },
    {
      profession: 'Bác sĩ Sản phụ khoa',
      name: 'Ngô Bích Ngọc',
      imgSrc: 'https://res.cloudinary.com/dut4zlbui/image/upload/v1743333687/jl79iazp33ec8ct4lauh.png',
      imgSpecialty: 'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/66a0de7f7e10aa1c41bd1066_menopause.svg'

    },
    {
      profession: 'Bác sĩ Da liễu',
      name: 'Phạm Yến Nhi',
      imgSrc: 'https://res.cloudinary.com/dut4zlbui/image/upload/v1743334236/tlkwnd0m0nxxi6ojuxlp.png',
      imgSpecialty: 'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/66a0de26c9ecfecfb834962c_rash%201.svg',
      hospital: 'Bệnh viện Đa khoa Hà Nội'

    },
    {
      profession: 'Bác sĩ Sản Đa Khoa',
      name: 'Đặng Thị Mai',
      imgSrc: 'https://res.cloudinary.com/dut4zlbui/image/upload/v1743334235/soijyuigohx1arqpshkv.png',
      imgSpecialty: 'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/66a0dd92bf76795c2ba6b5e0_check-up%201.svg',
      hospital: 'Bệnh viện Đa khoa Hà Nội'

    },
  ];

// data.tsx
export const galleryImages = [
  { src: '/images/Gallery/foodone.jpg', name: 'Caesar Salad(187 Kcal)', price: 35 },
  { src: '/images/Gallery/foodtwo.jpg', name: 'Christmas salad(118 Kcal)', price: 17 },
  { src: '/images/Gallery/foodthree.jpg', name: 'Sauteed mushrooms with pumpkin and sweet pepper(238 kcal)', price: 45 },
  { src: '/images/Gallery/foodfour.jpg', name: 'BBQ Chicken Feast Pizza(272 kcal)', price: 27 },
];

export const getDoctor = async () =>{ 
  const res = await fetch('http://localhost:3000/api/v1/doctors')
  const data = await res.json()
  return data 
}