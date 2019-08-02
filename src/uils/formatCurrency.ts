export function formatCurrency(v:number){
    return v.toLocaleString(undefined, {
        style: "currency",
        currency: "USD"
    });
}