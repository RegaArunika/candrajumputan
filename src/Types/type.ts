interface Benefit {
    id: number,
    name: string,
}

interface Photo {
    id: number,
    photo: string,
}

interface Testimonial {
    id: number,
    name: string,
    rating: string,
    message: string,
    photo: string,
}

export interface Jumputan {
    id: number,
    price: number,
    duration: number,
    name: string,
    slug: string,
    is_popular: boolean,
    category: Category,
    brand: Brand,
    thumbnail: string,
    benefits: Benefit[],
    photos: Photo[],
    testimonials: Testimonial[],
    about: string,
}

export interface Category {
    id: number,
    name: string,
    slug: string,
    photo: string,
    jumputans_count: number,
    jumputans: Jumputan[],
    popular_jumputans: Jumputan[],
}

export interface Brand {
    id: number,
    name: string,
    slug: string,
    photo: string,
    jumputans_count: number,
    jumputans: Jumputan[],
    popular_jumputans: Jumputan[],
}

export interface BookingDetails {
    id: number,
    name: string,
    phone: string,
    email: string,
    proof: string|null,
    address: string,
    post_code: string,
    city: string,
    booking_trx_id: string,
    quantity: number,
    is_paid: boolean,
    sub_total_amount: number,
    total_amount: number,
    total_tax_amount: number,
    transaction_details: TransactionDetails[],
}

interface TransactionDetails {
    id: number,
    price: number,
    jumputan_id: number,
    quantity: number,
    jumputan: Jumputan,
}

export interface CartItem {
    jumputan_id: number,
    slug: string,
    quantity: number,
}

export type BookingFormData = {
    name: string,
    email: string,
    phone: string,
    post_code: string,
    address: string,
    city: string,
}