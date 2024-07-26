import { instance } from '@/api/intance';
import { TGetPostList, TWritePost } from '@/types/posts';

const ENDPOINT = '/post';

export async function getPostList(category: string, page: number) {
  const { data } = await instance.get<TGetPostList>('/post/search', {
    params: { category, page },
  });

  return data;
}

export async function writePost(post: TWritePost, memberId: number) {
  const { data } = await instance.post<number>(`${ENDPOINT}/${memberId}`, post);

  return data;
}
