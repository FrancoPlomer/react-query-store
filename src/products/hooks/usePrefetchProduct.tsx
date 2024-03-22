import { productActions } from '..';
import { useQueryClient } from '@tanstack/react-query';

export const usePrefetchProduct = () => {
    
    const queryClient = useQueryClient();

    const preFetchProduct = async ( id: number ) => {

        queryClient.prefetchQuery({
            queryKey: [ 'product', id ],
            queryFn: () => productActions.getProductById( id )
        }) 
    }

    return preFetchProduct;
}
