export interface Address{
    id: number,
    country: string,
    city: string,
    district: string,
    name: string,
    createdAt: Date;
    updatedAt: Date;
}

export interface GetAllAddressFilterDto {
    items_per_page?: number;
    page?: number;
    query?: string;
    isDistinctCity? : boolean
}

export interface GetAllAddressResponeDto {
    data: Address[];
    total: number;
    currentPage: number;
    itemsPerPage: number;
}