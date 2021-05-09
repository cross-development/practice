//Packages
import { useMutation } from 'react-query';
//Services
import { updateBook } from 'services/api';

export const useUpdateBook = () => {
	const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

	return { mutateAsync, isMutating };
};
