export interface Skill {
    id: number,
    name: string,
    createdAt: Date;
    updatedAt: Date;
}

export interface GetAllSkillFilterDto {
    items_per_page?: number;
    page?: number;
    query?: string;
}

export interface GetAllSkillResponeDto {
    data: Skill[];
    total: number;
    currentPage: number;
    itemsPerPage: number;
}