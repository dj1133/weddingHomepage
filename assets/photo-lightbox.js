const gallery = (venue, photos) => ({
  venue,
  photos: photos.map(([slug, title, description]) => ({ slug, title, description })),
});

const photoGalleries = {
  jsquare: gallery('제이스퀘어호텔', [
    ['jsquare-photo-1', '제우스홀 버진로드', '짙은 우드 톤 홀 중앙으로 풍성한 화이트 플라워 버진로드가 길게 이어집니다.'],
    ['jsquare-photo-2', '제우스홀 샹들리에', '다층 크리스털 샹들리에와 천장 조명이 차분하고 깊이 있는 분위기를 만듭니다.'],
    ['jsquare-photo-3', '제우스홀 리셉션 세팅', '원형 테이블과 플라워 장식이 어우러진 제우스홀의 연회형 좌석 전경입니다.'],
    ['jsquare-photo-4', '제우스홀 웨딩 스테이지', '커튼 장식의 단상과 대칭형 조명이 예식의 중심을 또렷하게 잡아줍니다.'],
    ['jsquare-photo-5', '제우스홀 후면 전경', '하객석 뒤에서 바라본 단상과 조명 배치를 한눈에 확인할 수 있습니다.'],
    ['jsquare-photo-6', '비너스홀 신부대기실', '화이트 커튼과 플라워 소파로 꾸민 밝고 아늑한 신부대기 공간입니다.'],
    ['jsquare-photo-7', '비너스홀 버진로드', '자작나무와 화이트 플라워가 장식된 밝은 홀의 중앙 버진로드입니다.'],
    ['jsquare-photo-8', '비너스홀 정면 전경', '은은한 크리스털 조명 아래 단상과 좌석이 반듯하게 펼쳐집니다.'],
    ['jsquare-photo-9', '비너스홀 연회 세팅', '원형 테이블과 내추럴 그린 장식이 조화로운 하객석 전경입니다.'],
    ['jsquare-photo-10', '비너스홀 측면 전경', '밝은 벽면과 샹들리에, 여유로운 좌석 간격을 측면에서 담았습니다.'],
    ['jsquare-photo-11', '비너스 플라워 로드', '풍성한 벚꽃 장식 사이로 이어지는 화사한 입장 동선입니다.'],
    ['jsquare-photo-12', '제우스홀 신부대기실', '크리스털 조명과 부드러운 커튼으로 완성한 프라이빗 대기 공간입니다.'],
    ['jsquare-photo-13', '헤라홀 신부대기실', '높은 벽면과 샹들리에, 그린 장식이 어우러진 깨끗한 촬영 공간입니다.'],
    ['jsquare-photo-14', '헤라홀 버진로드', '높은 트러스 천장과 풍성한 플라워가 웅장한 가든 웨딩 분위기를 연출합니다.'],
    ['jsquare-photo-15', '헤라홀 천장 조명', '골드 프레임과 다양한 펜던트 조명이 홀의 화려한 깊이감을 살립니다.'],
    ['jsquare-photo-16', '헤라홀 파노라마', '통창으로 들어오는 자연광과 플라워 버진로드를 넓게 조망한 전경입니다.'],
    ['jsquare-photo-17', '헤라홀 측면 전경', '짙은 그린 장식과 골드 조명이 어우러진 하객석 분위기를 보여줍니다.'],
    ['jsquare-photo-18', '헤라홀 신부대기실', '화이트 소파와 플라워 월로 꾸민 우아하고 편안한 신부대기실입니다.'],
    ['jsquare-photo-19', '신부대기실 자연광', '넓은 창과 화이트 인테리어가 맑고 부드러운 인물 촬영을 돕습니다.'],
  ]),
  mconv: gallery('M컨벤션', [
    ['mconv-photo-1', '메리움홀 버진로드', '높은 박공형 창을 향해 이어지는 버진로드와 밝은 자연광이 인상적입니다.'],
    ['mconv-photo-2', '골드 라인 천장', '천장을 따라 반복되는 골드 조명과 샹들리에가 공간의 리듬을 만듭니다.'],
    ['mconv-photo-3', '플라워 버진로드', '화이트 플라워와 그린 장식이 중앙 입장 동선을 풍성하게 감쌉니다.'],
    ['mconv-photo-4', '메리움홀 측면 전경', '높은 천장과 웨딩 스테이지, 하객석 규모를 측면에서 확인할 수 있습니다.'],
    ['mconv-photo-5', '메리움홀 후면 전경', '하객석 뒤에서 바라본 단상과 대칭형 조명 배치가 웅장한 깊이감을 줍니다.'],
    ['mconv-photo-6', '신부대기실', '샹들리에와 그레이 커튼, 플라워 소파가 차분하고 우아한 분위기를 만듭니다.'],
    ['mconv-photo-7', '메인 로비', '대리석 마감과 골드 조명으로 정돈된 넓은 로비가 하객을 맞이합니다.'],
    ['mconv-photo-8', '로비 라운지 전경', '통창의 자연광과 여유로운 동선이 돋보이는 밝은 대기 공간입니다.'],
  ]),
  therium: gallery('더리움', [
    ['therium-photo-1', '라루체홀 전경', '골드 펜던트 조명과 짙은 그린 장식이 어우러진 하우스 웨딩홀 전경입니다.'],
    ['therium-photo-2', '라루체홀 파노라마', '높은 트러스 천장과 풍성한 플라워 장식을 넓은 시야로 담았습니다.'],
    ['therium-photo-3', '웨딩 스테이지', '골드 프레임과 커튼으로 꾸민 단상이 홀의 따뜻한 분위기를 완성합니다.'],
    ['therium-photo-4', '샹들리에 신부대기실', '쏟아지는 듯한 크리스털 조명과 그레이 커튼이 우아한 대기 공간을 만듭니다.'],
    ['therium-photo-5', '골드 트러스 천장', '입체적인 골드 구조와 다양한 펜던트 조명이 화려한 천장 풍경을 연출합니다.'],
    ['therium-photo-6', '연회장 배식대', '넓은 간격으로 배치된 배식대와 이동 동선을 한눈에 확인할 수 있습니다.'],
    ['therium-photo-7', '연회장 전경', '모던한 블랙 천장과 샹들리에가 조화를 이룬 쾌적한 연회 공간입니다.'],
    ['therium-photo-8', '플라워 신부대기실', '핑크 소파와 화이트 플라워로 완성한 화사한 신부대기실입니다.'],
    ['therium-photo-9', '라루체홀 하객석', '대형 창을 향해 놓인 하객석과 천장 조명이 따뜻한 개방감을 전합니다.'],
    ['therium-photo-10', '벨리타 입구', '깔끔한 다크 그레이 외벽과 골드 사인이 하객을 맞이하는 벨리타 입구입니다.'],
    ['therium-photo-11', '더리움 본관 외관', '주차 공간과 출입구 위치를 함께 확인할 수 있는 본관 정면입니다.'],
    ['therium-photo-12', '로비 크리스털 천장', '은은한 벽면 조명과 크리스털 천장이 밝고 품격 있는 로비를 만듭니다.'],
    ['therium-photo-13', '플라워 버진로드', '화이트 플라워와 그린 장식 사이로 단정한 버진로드가 이어집니다.'],
    ['therium-photo-14', '버진로드 정면', '풍성한 플라워 아치 너머로 웨딩 스테이지가 또렷하게 펼쳐집니다.'],
    ['therium-photo-15', '하객석과 조명', '골드 펜던트 조명 아래 정돈된 하객석 배치를 한눈에 볼 수 있습니다.'],
    ['therium-photo-16', '헤드 테이블 전경', '플라워 장식과 골드 조명이 어우러진 예식 중심 공간을 담았습니다.'],
    ['therium-photo-17', '라루체홀 와이드뷰', '무대와 하객석, 천장 장식을 한 화면에 담은 넓은 홀 전경입니다.'],
    ['therium-photo-18', '메인 로비', '높은 크리스털 천장과 밝은 석재 마감이 여유로운 환영 공간을 이룹니다.'],
    ['therium-photo-19', '안내 데스크', '출입구와 안내 데스크가 한눈에 들어오는 정돈된 로비 동선입니다.'],
    ['therium-photo-20', '신부대기실 입구', '플라워 계단과 샹들리에가 신부대기실로 이어지는 우아한 장면을 만듭니다.'],
    ['therium-photo-21', '브라이덜 파우더룸', '전구 거울과 넉넉한 테이블을 갖춘 밝고 실용적인 메이크업 공간입니다.'],
    ['therium-photo-22', '더리움 외관', '산과 소나무 풍경 속에 자리한 더리움의 차분한 외관입니다.'],
    ['therium-photo-23', '벨리타 정면', '넓은 주차 공간과 출입 동선을 확인할 수 있는 벨리타 정면 모습입니다.'],
    ['therium-photo-24', '벨리타 파노라마', '건물 전체 규모와 하객 차량 동선을 넓은 시야로 보여줍니다.'],
    ['therium-photo-25', '본관과 자연 풍경', '푸른 산을 배경으로 한 본관 외관과 넉넉한 야외 공간입니다.'],
    ['therium-photo-26', '라루체홀 측면', '통창의 자연광과 골드 조명이 어우러진 홀의 측면 전경입니다.'],
    ['therium-photo-27', '신부대기실 포토존', '핑크 소파와 플라워 계단이 로맨틱한 촬영 배경을 완성합니다.'],
    ['therium-photo-28', '연회장 오픈 키친', '유리 파티션 너머 조리 공간과 배식 동선을 깔끔하게 확인할 수 있습니다.'],
    ['therium-photo-29', '연회장 배식 공간', '여러 배식대를 여유롭게 이용할 수 있는 넓은 연회장 구성입니다.'],
    ['therium-photo-30', '연회장 테이블 세팅', '통창을 따라 길게 배치된 좌석과 테이블 규모를 보여주는 전경입니다.'],
    ['therium-photo-31', '로비 플라워 포토월', '기하학 패턴 벽면과 화이트 플라워가 세련된 포토존을 만듭니다.'],
    ['therium-photo-32', '더리움 전경', '맑은 하늘과 주변 자연이 어우러진 더리움 건물 전체 모습입니다.'],
  ]),
  shconv: gallery('선학컨벤션', [
    ['hall-shconv', '블리스홀 전경', '높은 박공 천장과 크리스털 샹들리에가 웅장한 채플 웨딩 분위기를 만듭니다.'],
    ['shconv-photo-1', '신부대기 라운지', '통창의 자연광과 화이트 소파가 편안하고 밝은 대기 공간을 완성합니다.'],
    ['shconv-photo-2', '브라이덜 드레스룸', '넓은 거울과 수납장을 갖춰 예식 전 준비에 여유를 더한 공간입니다.'],
    ['shconv-photo-3', '로비 플라워 월', '아치형 벽면과 샹들리에, 그린 장식이 우아한 포토 스폿을 만듭니다.'],
    ['shconv-photo-4', '로비 샹들리에', '길게 떨어지는 크리스털 조명이 밝은 로비에 화려한 포인트를 더합니다.'],
    ['shconv-photo-5', '크리스털 천장', '섬세한 크리스털 패널과 간접조명이 로비의 품격을 높입니다.'],
    ['shconv-photo-6', '블리스홀 천장 조명', '다크 우드 천장과 다양한 샹들리에가 깊이 있는 빛의 풍경을 연출합니다.'],
    ['shconv-photo-7', '블리스홀 정면 전경', '아치형 통창과 풍성한 그린 장식이 어우러진 웨딩 스테이지 전경입니다.'],
    ['shconv-photo-8', '블리스홀 버진로드', '높은 천장 아래 샹들리에가 이어지는 중앙 입장 동선을 담았습니다.'],
  ]),
  dongbang: gallery('호텔동방', [
    ['dongbang-grand-main', '그랜드볼룸 웨딩 스테이지', '블랙 패널과 화이트 커튼, 크리스털 샹들리에가 클래식한 무대를 완성합니다.'],
    ['dongbang-grand-ceremony', '그랜드볼룸 전경', '풍성한 플라워 장식과 정돈된 하객석이 품격 있는 예식 분위기를 보여줍니다.'],
    ['dongbang-grand-bridal-1', '그랜드볼룸 신부대기실', '높은 통창의 자연광과 화이트 소파가 밝고 우아한 대기 공간을 만듭니다.'],
    ['dongbang-grand-bridal-2', '신부대기실 파노라마', '샹들리에와 대형 창, 포토 스테이지를 한눈에 볼 수 있는 넓은 전경입니다.'],
    ['dongbang-harmony-main', '하모니볼룸 버진로드', '따뜻한 조명과 플라워 장식이 아늑하고 차분한 입장 동선을 연출합니다.'],
    ['dongbang-harmony-bridal', '하모니볼룸 신부대기실', '화이트 몰딩과 플라워 소파로 꾸민 단정하고 클래식한 대기 공간입니다.'],
  ]),
};

document.querySelectorAll('[data-photo-gallery]').forEach((gallery) => {
  const galleryData = photoGalleries[gallery.dataset.photoGallery];
  if (!galleryData) return;

  gallery.replaceChildren();

  galleryData.photos.forEach(({ slug, title: photoTitle, description }, index) => {
    const card = document.createElement('a');
    card.className = 'photo-card';
    card.href = `../assets/images/web/${slug}-1600.webp`;

    const picture = document.createElement('picture');
    picture.className = 'responsive-picture';

    const avifSource = document.createElement('source');
    avifSource.type = 'image/avif';
    avifSource.srcset = [480, 960, 1600]
      .map((width) => `../assets/images/web/${slug}-${width}.avif ${width}w`)
      .join(', ');
    avifSource.sizes = '(max-width: 900px) calc(100vw - 36px), 33vw';

    const image = document.createElement('img');
    image.src = `../assets/images/web/${slug}-960.webp`;
    image.srcset = [480, 960, 1600]
      .map((width) => `../assets/images/web/${slug}-${width}.webp ${width}w`)
      .join(', ');
    image.sizes = '(max-width: 900px) calc(100vw - 36px), 33vw';
    image.alt = `${galleryData.venue} ${photoTitle}`;
    image.loading = index === 0 ? 'eager' : 'lazy';
    image.decoding = 'async';
    if (index === 0) image.fetchPriority = 'high';

    const copy = document.createElement('span');
    copy.className = 'photo-card-copy';
    const title = document.createElement('strong');
    title.textContent = photoTitle;
    const descriptionCopy = document.createElement('span');
    descriptionCopy.textContent = description;

    picture.append(avifSource, image);
    copy.append(title, descriptionCopy);
    card.append(picture, copy);
    gallery.append(card);
  });
});

const photoCards = document.querySelectorAll('.photo-card');

if (photoCards.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'photo-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <button type="button" class="photo-lightbox-close" aria-label="Close photo">Close</button>
    <figure class="photo-lightbox-frame">
      <img src="" alt="" decoding="async">
      <figcaption></figcaption>
    </figure>
  `;
  document.body.append(lightbox);

  const lightboxImage = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('figcaption');
  const closeButton = lightbox.querySelector('.photo-lightbox-close');
  let lastFocusedCard = null;

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.removeAttribute('src');
    document.body.classList.remove('has-photo-lightbox');
    lastFocusedCard?.focus();
  };

  photoCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      event.preventDefault();
      const image = card.querySelector('img');
      const title = card.querySelector('strong')?.textContent || image?.alt || 'Photo';
      const description = card.querySelector('.photo-card-copy span')?.textContent || '';
      lastFocusedCard = card;
      lightboxImage.src = card.href;
      lightboxImage.alt = image?.alt || title;
      lightboxCaption.textContent = description ? title + ' - ' + description : title;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('has-photo-lightbox');
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
}
