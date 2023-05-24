import { client } from '../client';
import { ICreateVisitResponse } from './interfaces/CreateVisitResponse.interface';
import { ICreateVisitRequest } from './interfaces/CreateVisitRequest.interface';
import { useMutation } from 'react-query';
import { HTTPError } from 'ky';
import { IVisit } from '../../interfaces/IVisit';
import { IFetchTableResponse } from './interfaces/IFetchTableResponse';
import { IFetchTableRequest } from './interfaces/IFetchTableRequest';

export const visitsService = {
  createVisit: async (req: ICreateVisitRequest): Promise<ICreateVisitResponse> => {
    const result = await client.post('visits', {
      json: req,
    });

    return result.json();
  },
  fetchVisits: async (): Promise<IVisit[]> => {
    const result = await client.get('visits');

    return result.json();
  },

  fetchTable: async ({ group, lesson }: IFetchTableRequest): Promise<IFetchTableResponse> => {
    const result = await client.post('visits/table', {
      json: {
        group,
        lesson,
      },
    });

    return result.json();
  },
};


// Hooks
export const useCreateVisitMutation = () => useMutation<
  ICreateVisitResponse,
  HTTPError,
  ICreateVisitRequest
>(visitsService.createVisit);

export const useFetchTable = () => useMutation<
  IFetchTableResponse,
  HTTPError,
  IFetchTableRequest
>(visitsService.fetchTable);