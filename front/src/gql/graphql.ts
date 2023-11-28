/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Counter = {
  __typename?: 'Counter';
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  incrementCounter: Counter;
};


export type MutationIncrementCounterArgs = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  counter: Counter;
};


export type QueryCounterArgs = {
  id: Scalars['ID']['input'];
};

export type GetCounterQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCounterQuery = { __typename?: 'Query', counter: (
    { __typename?: 'Counter', id: string, count: number }
    & { ' $fragmentRefs'?: { 'CounterFragmentFragment': CounterFragmentFragment } }
  ) };

export type IncrementCounterMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type IncrementCounterMutation = { __typename?: 'Mutation', incrementCounter: { __typename?: 'Counter', id: string, count: number } };

export type CounterFragmentFragment = { __typename?: 'Counter', id: string, count: number } & { ' $fragmentName'?: 'CounterFragmentFragment' };

export const CounterFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CounterFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Counter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]} as unknown as DocumentNode<CounterFragmentFragment, unknown>;
export const GetCounterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCounter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"counter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CounterFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CounterFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Counter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]} as unknown as DocumentNode<GetCounterQuery, GetCounterQueryVariables>;
export const IncrementCounterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"incrementCounter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"incrementCounter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<IncrementCounterMutation, IncrementCounterMutationVariables>;