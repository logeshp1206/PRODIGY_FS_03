import darjeelingTea from "@assets/generated_images/premium_darjeeling_tea.png";
import pashminaShawl from "@assets/generated_images/handwoven_pashmina_shawl.png";
import brassLamp from "@assets/generated_images/brass_oil_lamp.png";
import turmericPowder from "@assets/generated_images/organic_turmeric_powder.png";
import terracottaPot from "@assets/generated_images/handcrafted_terracotta_pot.png";
import sandalwoodSoap from "@assets/generated_images/mysore_sandalwood_soap.png";
import saffron from "@assets/generated_images/kashmiri_saffron_box.png";
import bluePottery from "@assets/generated_images/blue_pottery_plate.png";
import chaiMasala from "@assets/generated_images/masala_chai_spice_mix.png";
import woodenElephant from "@assets/generated_images/wooden_elephant_statue.png";
import mangoes from "@assets/generated_images/alphonso_mangoes.png";
import khadiKurta from "@assets/generated_images/khadi_cotton_kurta.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Premium Darjeeling Tea",
    description: "Authentic first flush loose leaf tea from the misty hills of Darjeeling. Floral aroma with muscatel notes.",
    price: 1250,
    category: "Pantry",
    image: darjeelingTea,
    rating: 4.9,
    reviews: 128,
    inStock: true,
  },
  {
    id: "2",
    name: "Kashmiri Pashmina Shawl",
    description: "Luxurious, hand-woven Pashmina shawl featuring intricate embroidery. Soft, warm, and timelessly elegant.",
    price: 15000,
    category: "Clothing",
    image: pashminaShawl,
    rating: 5.0,
    reviews: 85,
    inStock: true,
  },
  {
    id: "3",
    name: "Handcrafted Brass Diya",
    description: "Traditional brass oil lamp with detailed engravings. Perfect for festivals and adding a warm glow to your home.",
    price: 850,
    category: "Home Decor",
    image: brassLamp,
    rating: 4.8,
    reviews: 210,
    inStock: true,
  },
  {
    id: "4",
    name: "Organic Turmeric Powder",
    description: "Pure, high-curcumin turmeric powder sourced from organic farms. Vibrant color and potent health benefits.",
    price: 350,
    category: "Pantry",
    image: turmericPowder,
    rating: 4.9,
    reviews: 340,
    inStock: true,
  },
  {
    id: "5",
    name: "Warli Art Terracotta Pot",
    description: "Hand-thrown clay pot adorned with traditional Warli tribal art. A beautiful piece of Indian heritage for your home.",
    price: 1800,
    category: "Home Decor",
    image: terracottaPot,
    rating: 4.7,
    reviews: 56,
    inStock: true,
  },
  {
    id: "6",
    name: "Mysore Sandalwood Soap",
    description: "The classic scent of India. Enriched with pure sandalwood oil for a luxurious and aromatic bathing experience.",
    price: 450,
    category: "Personal Care",
    image: sandalwoodSoap,
    rating: 4.8,
    reviews: 425,
    inStock: true,
  },
  {
    id: "7",
    name: "Kashmiri Mongra Saffron",
    description: "The world's finest saffron. Deep red threads with potent aroma and color. Perfect for biryanis and desserts.",
    price: 5500,
    category: "Pantry",
    image: saffron,
    rating: 5.0,
    reviews: 92,
    inStock: true,
  },
  {
    id: "8",
    name: "Jaipur Blue Pottery Plate",
    description: "Exquisite decorative plate featuring the famous blue glaze and floral patterns of Jaipur. A stunning wall accent.",
    price: 2200,
    category: "Home Decor",
    image: bluePottery,
    rating: 4.6,
    reviews: 38,
    inStock: true,
  },
  {
    id: "9",
    name: "Royal Masala Chai Blend",
    description: "A robust mix of Assam tea leaves and aromatic spices like cardamom, cinnamon, and cloves. The authentic taste of India.",
    price: 450,
    category: "Pantry",
    image: chaiMasala,
    rating: 4.9,
    reviews: 512,
    inStock: true,
  },
  {
    id: "10",
    name: "Sandalwood Elephant Statue",
    description: "Intricately carved wooden elephant statue. A symbol of wisdom and strength, handcrafted by skilled artisans.",
    price: 3500,
    category: "Home Decor",
    image: woodenElephant,
    rating: 4.8,
    reviews: 64,
    inStock: false,
  },
  {
    id: "11",
    name: "Ratnagiri Alphonso Mangoes (Dozen)",
    description: "The King of Mangoes. Sweet, rich, and juicy organic Alphonso mangoes direct from Ratnagiri orchards.",
    price: 1800,
    category: "Pantry",
    image: mangoes,
    rating: 4.7,
    reviews: 150,
    inStock: true,
  },
  {
    id: "12",
    name: "Pure Khadi Cotton Kurta Fabric",
    description: "Unstitched, hand-spun Khadi cotton fabric. Breathable, eco-friendly, and perfect for summer wear.",
    price: 1200,
    category: "Clothing",
    image: khadiKurta,
    rating: 4.5,
    reviews: 45,
    inStock: true,
  },
];

export const CATEGORIES = ["All", "Pantry", "Home Decor", "Clothing", "Personal Care"];
