import { artigos } from '../data/artigos';
import { Artigo } from "@/types/types";

export const getAllArticles = async (): Promise<Artigo[]> => {

    return artigos;
};

export const getArticleBySlug = async (slug: string): Promise<Artigo | undefined> => {
    
    return artigos.find((artigo) => artigo.slug === slug);
};

export const getArticlesByCategory = async (categoria: string): Promise<Artigo[]> => {
    
    return artigos.filter((artigo) => artigo.categoria === categoria);
};