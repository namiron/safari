import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL_USERS } from '../../common/constants';



export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL_USERS}`)
            if (!response.ok) {
                throw Error('Server error')
            }
            const data = response.json()
            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const createUsersOnServer = createAsyncThunk(
    'users/createUsersOnServer',
    async (createUser, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL_USERS}`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(createUser)
            })
            if (!response.ok) {
                throw Error('Server error')

            }
            const data = await response.json()
            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addToCartForUserProduct = createAsyncThunk(
    'users/addToCartForUserProduct',
    async ({ item, currentUser }, { rejectWithValue, dispatch }) => {

        const { id } = currentUser
        try {
            const response = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/users/${id}`)
            if (!response.ok) {
                throw Error('Server error')
            }
            const users = await response.json()


            if (!users.cart) {
                users.cart = []
            }
            users.cart.push(item)

            const userUpdateResponse = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/users/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(users)
            })
            if (!userUpdateResponse.ok) {
                throw Error('Server error')
            }
            const newUsers = await userUpdateResponse.json()
            dispatch(createNewItemToUserCart(item))
            console.log('newUsers:', newUsers);
            return newUsers
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addToFavoriteForUser = createAsyncThunk(
    'users/addToCartForUserProduct',
    async ({ item, currentUser }, { rejectWithValue, dispatch }) => {

        const { id } = currentUser
        try {
            const response = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/users/${id}`)
            if (!response.ok) {
                throw Error('Server error')
            }
            const users = await response.json()


            if (!users.favorite) {
                users.favorite = []
            }
            users.favorite.push(item)

            const userUpdateResponseFavorite = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/users/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(users)
            })
            if (!userUpdateResponseFavorite.ok) {
                throw Error('Server error')
            }
            const newFavorite = await userUpdateResponseFavorite.json()
            dispatch(createNewItemToUserFavorite(item))
            console.log('newFavorite:', newFavorite);
            return newFavorite
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const removeFromFavoriteForUser = createAsyncThunk(
    'users/removeFromFavoriteForUser',
    async ({ id, currentUser }, { rejectWithValue, dispatch }) => {
        try {
            const { id: userId } = currentUser;
            const response = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/users/${userId}`);
            if (!response.ok) {
                throw Error('Server error');
            }
            const userData = await response.json();
            const updatedFavorite = userData.favorite.filter(item => item.id !== id);
            userData.favorite = updatedFavorite;

            const updateResponse = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/users/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            if (!updateResponse.ok) {
                throw Error('Server error');
            }
            const updatedUser = await updateResponse.json();

            dispatch(removeProductFromUFavoriteAction(updatedUser.favorite))
            console.log('updatedUser:', updatedUser);
            return updatedUser;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeFromFavoritePage = createAsyncThunk(
    'users/removeFromFavoriteForUser',
    async ({ productId, userId }, { rejectWithValue, dispatch }) => {

        try {

            const response = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/users/${userId}`);
            if (!response.ok) {
                throw Error('Server error');
            }
            const userData = await response.json();
            const updatedFavorite = userData.favorite.filter(item => item.id !== productId);
            userData.favorite = updatedFavorite;

            const updateResponse = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/users/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            if (!updateResponse.ok) {
                throw Error('Server error');
            }
            const updatedUser = await updateResponse.json();


            dispatch(removeProductFromUFavoriteAction(updatedUser.favorite))
            console.log('updatedUser:', updatedUser);
            return updatedUser;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);



export const removeProductFromUserCart = createAsyncThunk(
    'users/removeProductFromUserCart',
    async ({ productId, userId }, { rejectWithValue, dispatch }) => {

        try {
            const response = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/users/${userId}`);
            if (!response.ok) {
                throw Error('Server error');
            }
            let user = await response.json();


            user.cart = user.cart.filter(item => item.id !== productId);

            const updateCartToUser = await fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/users/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            if (!updateCartToUser.ok) {
                throw Error('Server error');
            }
            const newUsers = await updateCartToUser.json();


            dispatch(removeProductFromUserCartAction(newUsers.cart));
            return newUsers;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const userSlice = createSlice({
    name: 'users',
    initialState: {
        status: null,
        users: [],
        currentUser: null,
        errors: null
    },
    reducers: {
        comparisonsData(state, { payload }) {
            state.currentUser = null;
            for (let i = 0; i < state.users.length; i++) {
                const user = state.users[i];
                if (user.email === payload.email && user.password === payload.password) {
                    state.currentUser = { ...user };
                    break;
                }
            }
        },
        removeUser(state) {
            state.currentUser = null
        },
        removeProductFromUserCartAction(state, { payload }) {
            state.currentUser.cart = payload;
        },
        removeProductFromUFavoriteAction(state, { payload }) {
            state.currentUser.favorite = payload;
        },

        createNewItemToUserCart(state, { payload }) {
            state.currentUser.cart.push(payload)
        },
        createNewItemToUserFavorite(state, { payload }) {
            state.currentUser.favorite.push(payload)
        }
    },
    extraReducers(builder) {
        builder.addCase(getUsers.pending, (state) => {
            state.status = 'loading'
            state.errors = null
        })
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                state.status = 'fulfilled'
                state.users = payload
                state.errors = null
            })
            .addCase(getUsers.rejected, (state, { payload }) => {
                state.status = 'errors'
                state.errors = payload
            })
    }
})

export const { comparisonsData, removeUser, removeProductFromUserCartAction, removeProductFromUFavoriteAction, createNewItemToUserCart, createNewItemToUserFavorite } = userSlice.actions;

export default userSlice.reducer