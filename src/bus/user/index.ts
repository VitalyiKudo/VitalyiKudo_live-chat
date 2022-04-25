// Core

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useUserSaga } from './saga';

export const useUser = () => {
    const { createUser, getUser } = useUserSaga();
    const user = useSelector((state) => state.user.user); // Add user to ./src/init/redux/index.ts

    return {
        createUser,
        getUser,
        user,
    };
};
