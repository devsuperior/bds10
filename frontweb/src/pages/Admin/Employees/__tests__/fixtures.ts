import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_URL } from 'util/requests';

const getDepartmentsResponse = [
  {
    id: 2,
    name: 'Management',
  },
  {
    id: 1,
    name: 'Sales',
  },
  {
    id: 3,
    name: 'Training',
  },
];

const postEmployeeResponse = {
  id: 16,
  name: 'Joaquim',
  email: 'joaquim@gmail.com',
  department: {
    id: 1,
    name: null,
  },
};

export const getEmployessResponse = {
  content: [
    {
      id: 5,
      name: 'Alex',
      email: 'alex@gmail.com',
      department: {
        id: 1,
        name: 'Sales',
      },
    },
    {
      id: 2,
      name: 'Ana',
      email: 'ana@gmail.com',
      department: {
        id: 2,
        name: 'Management',
      },
    },
    {
      id: 12,
      name: 'Andressa',
      email: 'andressa@gmail.com',
      department: {
        id: 2,
        name: 'Management',
      },
    },
    {
      id: 3,
      name: 'Bob',
      email: 'bob@gmail.com',
      department: {
        id: 1,
        name: 'Sales',
      },
    },
  ],
  pageable: {
    sort: {
      sorted: true,
      unsorted: false,
      empty: false,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 4,
    unpaged: false,
    paged: true,
  },
  last: false,
  totalPages: 4,
  totalElements: 16,
  size: 4,
  number: 0,
  sort: {
    sorted: true,
    unsorted: false,
    empty: false,
  },
  first: true,
  numberOfElements: 4,
  empty: false,
};

export const server = setupServer(
  rest.get(`${BASE_URL}/departments`, (req, res, ctx) => {
    return res(
        ctx.status(200), 
        ctx.json(getDepartmentsResponse)
    );
  }),
  rest.get(`${BASE_URL}/employees`, (req, res, ctx) => {
    return res(
        ctx.status(200), 
        ctx.json(getEmployessResponse)
    );
  }),
  rest.post(`${BASE_URL}/employees`, (req, res, ctx) => {
    return res(
        ctx.status(201), 
        ctx.json(postEmployeeResponse)
    );
  })
);
