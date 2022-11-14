--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: author; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.author (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: author_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.author_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: author_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.author_id_seq OWNED BY public.author.id;


--
-- Name: books; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.books (
    id integer NOT NULL,
    author integer NOT NULL,
    name character varying(50) NOT NULL,
    year character varying(4) NOT NULL,
    company integer NOT NULL,
    synopsis character varying(300) NOT NULL,
    "bookCover" text NOT NULL,
    pages integer NOT NULL
);


--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: library; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.library (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    book integer NOT NULL,
    status integer NOT NULL
);


--
-- Name: library_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.library_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: library_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.library_id_seq OWNED BY public.library.id;


--
-- Name: publishingCompany; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."publishingCompany" (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: publishingCompany_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."publishingCompany_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: publishingCompany_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."publishingCompany_id_seq" OWNED BY public."publishingCompany".id;


--
-- Name: ranking; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ranking (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    book integer NOT NULL,
    pages integer DEFAULT 0 NOT NULL
);


--
-- Name: ranking_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ranking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ranking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ranking_id_seq OWNED BY public.ranking.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    valid boolean DEFAULT true NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: status; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.status (
    id integer NOT NULL,
    name character varying(20) NOT NULL
);


--
-- Name: status_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.status_id_seq OWNED BY public.status.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(20) NOT NULL,
    email character varying(100) NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: author id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.author ALTER COLUMN id SET DEFAULT nextval('public.author_id_seq'::regclass);


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Name: library id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.library ALTER COLUMN id SET DEFAULT nextval('public.library_id_seq'::regclass);


--
-- Name: publishingCompany id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."publishingCompany" ALTER COLUMN id SET DEFAULT nextval('public."publishingCompany_id_seq"'::regclass);


--
-- Name: ranking id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ranking ALTER COLUMN id SET DEFAULT nextval('public.ranking_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: status id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.status ALTER COLUMN id SET DEFAULT nextval('public.status_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: author; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.author VALUES (1, 'Raphael Montes');
INSERT INTO public.author VALUES (5, 'Stephen King');
INSERT INTO public.author VALUES (6, 'Brandon Sanderson');
INSERT INTO public.author VALUES (7, 'Lev Grossman');
INSERT INTO public.author VALUES (8, 'H. P. Lovecraft');
INSERT INTO public.author VALUES (9, 'Emma Watson');


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.books VALUES (1, 9, 'Harry Potter e as Relíquias da Morte', '2007', 3, 'Sem a orientação e proteção de seus professores, Harry, Rony e Hermione iniciam uma missão para destruir as horcruxes, que são as fontes da imortalidade de Voldemort.', 'https://i.pinimg.com/originals/fb/0b/dd/fb0bddb39c93b4e4ab9efab401886155.jpg', 512);
INSERT INTO public.books VALUES (3, 7, 'The Magicians', '2009', 4, 'Os Magos está para Harry Potter como uma dose de uísque puro malte está para uma xícara de chá - George R. R. Martin', 'https://m.media-amazon.com/images/I/71Cd+dl-XYL.jpg', 456);
INSERT INTO public.books VALUES (4, 6, 'Mistborn - o império final', '2014', 5, 'O que acontece se o herói da profecia falhar? Descubra em Mistborn! Certa vez, um herói apareceu para salvar o mundo. Um jovem com uma herança misteriosa, que desafiou corajosamente a escuridão que sufocava a Terra. Ele falhou.', 'https://m.media-amazon.com/images/I/91YMAbLoOVL.jpg', 612);
INSERT INTO public.books VALUES (5, 8, 'O Horror em Red Hook', '2015', 5, 'Entre os anos 1921 e 1933 Howard Phillips Lovecraft criou na solidão e na pobreza os “mitos de Cthulhu”, uma das obras mais extraordinárias da imaginação humana.', 'https://m.media-amazon.com/images/I/91RMSqxB4IL.jpg', 612);


--
-- Data for Name: library; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.library VALUES (1, 1, 4, 2);
INSERT INTO public.library VALUES (7, 1, 1, 2);
INSERT INTO public.library VALUES (8, 1, 5, 7);
INSERT INTO public.library VALUES (10, 1, 3, 5);
INSERT INTO public.library VALUES (15, 4, 3, 2);


--
-- Data for Name: publishingCompany; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."publishingCompany" VALUES (1, 'Companhia das letras');
INSERT INTO public."publishingCompany" VALUES (2, 'Suma');
INSERT INTO public."publishingCompany" VALUES (3, 'Rocco');
INSERT INTO public."publishingCompany" VALUES (4, 'Dark Side');
INSERT INTO public."publishingCompany" VALUES (5, 'Leya');


--
-- Data for Name: ranking; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.status VALUES (1, 'Lendo');
INSERT INTO public.status VALUES (2, 'Lido');
INSERT INTO public.status VALUES (3, 'Relendo');
INSERT INTO public.status VALUES (5, 'Favorito');
INSERT INTO public.status VALUES (6, 'Abandonado');
INSERT INTO public.status VALUES (7, 'Quero Ler');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Mutano', 'mutano@titans.com', '123456');
INSERT INTO public.users VALUES (4, 'Ciborgue', 'ciborgue@titans.com', '123456');
INSERT INTO public.users VALUES (5, 'Estelar', 'estelar@titans.com', '123456');
INSERT INTO public.users VALUES (6, 'Ravena', 'ravena@titans.com', '123456');


--
-- Name: author_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.author_id_seq', 9, true);


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.books_id_seq', 5, true);


--
-- Name: library_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.library_id_seq', 16, true);


--
-- Name: publishingCompany_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."publishingCompany_id_seq"', 5, true);


--
-- Name: ranking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ranking_id_seq', 1, false);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 1, false);


--
-- Name: status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.status_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: author author_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_name_key UNIQUE (name);


--
-- Name: author author_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pkey PRIMARY KEY (id);


--
-- Name: books books_bookCover_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT "books_bookCover_key" UNIQUE ("bookCover");


--
-- Name: books books_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_name_key UNIQUE (name);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: books books_synopsis_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_synopsis_key UNIQUE (synopsis);


--
-- Name: library library_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.library
    ADD CONSTRAINT library_pkey PRIMARY KEY (id);


--
-- Name: publishingCompany publishingCompany_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."publishingCompany"
    ADD CONSTRAINT "publishingCompany_name_key" UNIQUE (name);


--
-- Name: publishingCompany publishingCompany_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."publishingCompany"
    ADD CONSTRAINT "publishingCompany_pkey" PRIMARY KEY (id);


--
-- Name: ranking ranking_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT ranking_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: status status_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_name_key UNIQUE (name);


--
-- Name: status status_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: books books_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_author_fkey FOREIGN KEY (author) REFERENCES public.author(id);


--
-- Name: books books_company_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_company_fkey FOREIGN KEY (company) REFERENCES public."publishingCompany"(id);


--
-- Name: library library_book_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.library
    ADD CONSTRAINT library_book_fkey FOREIGN KEY (book) REFERENCES public.books(id);


--
-- Name: library library_status_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.library
    ADD CONSTRAINT library_status_fkey FOREIGN KEY (status) REFERENCES public.status(id);


--
-- Name: library library_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.library
    ADD CONSTRAINT "library_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: ranking ranking_book_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT ranking_book_fkey FOREIGN KEY (book) REFERENCES public.books(id);


--
-- Name: ranking ranking_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT "ranking_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

