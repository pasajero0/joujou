const ID = 'id';

export const getPictureSrc = (url: string, id: string, size = 100, hasBlur = false) => {
  const [mainUrl] = url.split(ID) ?? [];
  const blur = hasBlur ? '?blur' : '';

  return `${mainUrl}${ID}/${id}/${size}${blur}` ?? '';
};
