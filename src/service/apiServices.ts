import axios from 'axios';


// Fungsi untuk fetch data global dari API

// Definisikan interface untuk data yang diterima dari API
export interface GlobalData {
  id: number;
  documentId: string;
  siteDescription: string;
  siteDescription2: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  siteName: string;
}
export interface PelayananData {
  id: number;
  documentId: string;
  namaPelayanan: string;
  deskripsiPelayanan: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  animation: object;
  featurPelayanan:string
}

export interface ProfileData {
  id: number;
  documentId: string;
  title: string;
  deskripsi: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  animation: object;

}
export interface LayananData {
  id: number;
  documentId: string;
  title: string;
  deskripsi: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  animation: object;

}

export interface ArtikelData {
  id: number;
  documentId: string;
  title: string;
  deskripsi: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  animation: object;

}

export interface KontakData {
  id: number;
  documentId: string;
  title: string;
  deskripsi: string;
  nomor_telepon: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  animation: object;

}

export interface KategoriData {
  id: number;
  documentId: string;
  name: string;
  deskripsi: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

}


export interface ArticlesData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Cover;
  author: Author;
  animation: object;
} 



export interface Cover {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata:  null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


export interface Author {
  id: number;
  documentId: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


export 

const url = "https://03a3-2001-448a-20a0-94cc-c1a1-1aeb-8ce6-cbae.ngrok-free.app/api"
// Fungsi untuk fetch data global dari API
const apiService = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true // Set this to true if the server requires credentials like cookies
});

export const fetchGlobalData = async (): Promise<GlobalData> => {
  const response = await apiService.get(`${url}/global`);
  return response.data.data; // Kembalikan data dari API
};

export const fetchPelayanan = async (): Promise<PelayananData[]> => {
    const response = await apiService.get(`${url}/pelayanans`);
    return response.data.data; // Kembalikan array objek dari API
  };
  
  
  export const fetchProfile = async (): Promise<ProfileData> => {
      const response = await apiService.get(`${url}/about`);
      return response.data.data; // Kembalikan array objek dari API
    };

  export const fetchLayanan = async (): Promise<LayananData> => {
      const response = await apiService.get(`${url}/layanan`);
      return response.data.data; // Kembalikan array objek dari API
    };

  export const fetchArtikle = async (): Promise<ArtikelData> => {
      const response = await apiService.get(`${url}/artikel`);
      return response.data.data; // Kembalikan array objek dari API
    };

  export const fetchKontak= async (): Promise<KontakData> => {
      const response = await apiService.get(`${url}/kontak`);
      return response.data.data; // Kembalikan array objek dari API
    };

  export const fetchArticles= async (): Promise<ArticlesData[]> => {
      const response = await apiService.get(`${url}/articles?populate=*`);
      return response.data.data; // Kembalikan array objek dari API
    };

  export const fetchKategories= async (): Promise<KategoriData[]> => {
      const response = await apiService.get(`${url}/categories`);
      return response.data.data; // Kembalikan array objek dari API
    };

  