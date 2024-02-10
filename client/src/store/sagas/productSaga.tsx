// sagas/productSaga.tsx

import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { fetchProductSuccess, fetchProductFailure } from '../../actions/productActions';
import { ApolloQueryResult } from '@apollo/client';
import { apolloClient } from '../../graphql/apolloClient';  // Adjust the path accordingly
import { GET_PRODUCTS_QUERY } from '../../graphql/querys';
import { Product } from '../../types'; // Replace 'Product' with the actual type of your product object


interface ProductQueryResponse {
  products: Product[];
}

function* fetchProduct() {
  try {
    const response: ApolloQueryResult<ProductQueryResponse> = yield call(
      apolloClient.query,
      {
        query: GET_PRODUCTS_QUERY,
      }
    );

    console.log('GraphQL Response:', response);


    for (const product of response.data.products) {
      yield put(fetchProductSuccess(product));
    }
  } catch (error) {
    yield put(fetchProductFailure((error as Error).message));
  }
}

function* watchFetchProduct() {
  yield takeEvery('FETCH_PRODUCT_REQUEST', fetchProduct);
}

function* productSaga(): Generator {
  yield all([fork(watchFetchProduct)]);
}

export default productSaga;
