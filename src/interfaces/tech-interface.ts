export type uses = "Frontend (Web)" | "Backend (Web)" | "Database" | "High Performance Apps"

export default interface tecnologies {
    name: string,
    logo: string, 
    learning_type: string,
    used_for: Array<uses>
}