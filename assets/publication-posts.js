(function () {
  const publications = [
    {
      slug: 'survey-handwritten-mathematical-expression-recognition-2024',
      category: 'hme',
      title: 'A Survey on Handwritten Mathematical Expression Recognition: The Rise of Encoder-Decoder and GNN Models',
      venue: 'Pattern Recognition',
      year: '2024',
      authors: 'Thanh-Nghia Truong, Cuong Tuan Nguyen, Richard Zanibbi, Harold Mouch\u00e8re, Masaki Nakagawa',
      abstract: 'This survey reviews handwritten mathematical expression recognition over the last decade, covering online stroke input, offline image input, and hybrid settings. It explains the shift from modular structural pipelines to encoder-decoder neural models and graph neural networks, compares major benchmarks and evaluation protocols, and discusses remaining limitations in structure recovery, language modeling, and reliable deployment.',
      contributions: [
        'Organizes recent HME recognition work around online, offline, and multimodal input settings.',
        'Explains the transition from symbol-segmentation and parsing pipelines to end-to-end encoder-decoder and GNN-based models.',
        'Compares representative methods and benchmark trends, especially around CROHME-style evaluation.',
        'Identifies open challenges in symbol relations, two-dimensional language modeling, data generation, and interpretable structure recovery.'
      ]
    },
    {
      slug: 'icdar-2023-crohme',
      category: 'hme',
      title: 'ICDAR 2023 CROHME: Competition on Recognition of Handwritten Mathematical Expressions',
      venue: 'ICDAR',
      year: '2023',
      authors: 'Yejing Xie, Harold Mouch\u00e8re, Foteini Simistira Liwicki, Sumit Rakesh, Rajkumar Saini, Masaki Nakagawa, Cuong Tuan Nguyen, Thanh-Nghia Truong',
      abstract: '',
      contributions: []
    },
    {
      slug: 'syntactic-data-generation-hme-2022',
      category: 'hme',
      title: 'Syntactic Data Generation for Handwritten Mathematical Expression Recognition',
      venue: 'Pattern Recognition Letters',
      year: '2022',
      authors: 'Thanh-Nghia Truong, Cuong Tuan Nguyen, Masaki Nakagawa',
      abstract: 'This paper proposes syntactic data generation for offline handwritten mathematical expression recognition. The method decomposes expressions into tree-structured sub-expressions and interchanges compatible parts to create syntactically valid new samples. The generated data improves both an end-to-end HME recognizer and a mathematical language model, leading to stronger expression recognition on CROHME benchmarks.',
      contributions: [
        'Introduces tree-based decomposition and sub-expression interchange for generating valid HME training samples.',
        'Uses generated HME patterns to train weakly supervised encoder-decoder recognition models.',
        'Shows that syntactically generated expressions improve both recognition models and math language models.',
        'Reports improved expression recognition rates on CROHME 2014, 2016, and 2019 test sets.'
      ]
    },
    {
      slug: 'global-context-online-hme-2021',
      category: 'hme',
      title: 'Global Context for Improving Recognition of Online Handwritten Mathematical Expressions',
      venue: 'ICDAR',
      year: '2021',
      authors: 'Cuong Tuan Nguyen, Thanh-Nghia Truong, Hung Tuan Nguyen, Masaki Nakagawa',
      abstract: '',
      contributions: []
    },
    {
      slug: 'transformer-math-language-model-hme-2021',
      category: 'hme',
      title: 'A Transformer-Based Math Language Model for Handwritten Math Expression Recognition',
      venue: 'ICDAR',
      year: '2021',
      authors: 'Huy Quang Ung, Cuong Tuan Nguyen, Hung Tuan Nguyen, Thanh-Nghia Truong, Masaki Nakagawa',
      abstract: '',
      contributions: []
    },
    {
      slug: 'relation-based-representation-hme-2021',
      category: 'hme',
      title: 'Relation-Based Representation for Handwritten Mathematical Expression Recognition',
      venue: 'ICDAR Workshops',
      year: '2021',
      authors: 'Thanh-Nghia Truong, Huy Quang Ung, Hung Tuan Nguyen, Cuong Tuan Nguyen, Masaki Nakagawa',
      abstract: 'This paper proposes a relation-based sequence representation for offline handwritten mathematical expression recognition. Instead of relying only on LaTeX-like one-dimensional strings, the representation makes symbol relations more explicit and shortens the target sequence. Experiments with an end-to-end offline HME recognizer show that relation-based targets help the model recover two-dimensional structure more accurately than a LaTeX-based baseline.',
      contributions: [
        'Defines a relation-based representation for HMEs to expose two-dimensional structure more directly.',
        'Reduces the burden of long LaTeX-style target sequences in end-to-end recognition.',
        'Evaluates the representation with a weakly supervised offline HME recognizer.',
        'Improves expression recognition on CROHME 2014, 2016, and 2019 compared with LaTeX-based training targets.'
      ]
    },
    {
      slug: 'symbol-relation-tree-online-hme-2022',
      category: 'hme',
      title: 'Learning Symbol Relation Tree for Online Handwritten Mathematical Expression Recognition',
      venue: 'ACPR / LNCS',
      year: '2021-2022',
      authors: 'Thanh-Nghia Truong, Hung Tuan Nguyen, Cuong Tuan Nguyen, Masaki Nakagawa',
      abstract: 'This work recognizes online handwritten mathematical expressions by constructing a symbol relation tree directly from stroke sequences. A temporal classifier predicts symbols and spatial relations using global context, while a tree connector rebuilds the final expression structure from subtrees. The approach addresses stroke-order variation and achieves competitive recognition on CROHME 2014 and 2016.',
      contributions: [
        'Formulates online HME recognition as direct prediction of a symbol relation tree.',
        'Uses a temporal classifier to jointly predict symbols and relations from stroke sequences.',
        'Adds a tree connector and tree sorting strategy to handle varied writing orders.',
        'Demonstrates competitive expression recognition rates on CROHME 2014 and 2016.'
      ]
    },
    {
      slug: 'online-symbol-segmentation-recognition-2020',
      category: 'hme',
      title: 'Online Handwritten Mathematical Symbol Segmentation and Recognition with Bidirectional Context',
      venue: 'ICFHR',
      year: '2020',
      authors: 'Cuong Tuan Nguyen, Thanh-Nghia Truong, Quang Huy Ung, Masaki Nakagawa',
      abstract: '',
      contributions: []
    },
    {
      slug: 'weakly-supervised-offline-hme-2020',
      category: 'hme',
      title: 'Improvement of End-to-End Offline Handwritten Mathematical Expression Recognition by Weakly Supervised Learning',
      venue: 'ICFHR',
      year: '2020',
      authors: 'Thanh-Nghia Truong, Cuong Tuan Nguyen, Khanh Minh Phan, Masaki Nakagawa',
      abstract: 'This paper improves end-to-end offline handwritten mathematical expression recognition using weakly supervised learning. The architecture combines a CNN encoder, an attention-based decoder, and a symbol classifier so that expression-level supervision and symbol-level cues can be learned together. Model ensembling during beam search further improves recognition performance on CROHME test sets.',
      contributions: [
        'Adds weakly supervised symbol-level learning to an end-to-end offline HME recognizer.',
        'Combines CNN encoding, GRU attention decoding, and an auxiliary symbol classifier.',
        'Uses model ensembling during beam search to improve final expression recognition.',
        'Reports clear gains over the normalized baseline on CROHME 2014 and 2016.'
      ]
    },
    {
      slug: 'ecompass-geometric-construction-scoring-2026',
      category: 'scoring',
      title: 'Hierarchical Stroke-Level Clustering and Step-Level Segmentation for Automatic Scoring of Geometric Construction Answers with an Electronic Drawing Compass',
      venue: 'ICDAR',
      year: '2026',
      authors: 'Authors to be added after the camera-ready metadata is confirmed',
      abstract: 'This paper studies automatic scoring of geometric construction answers captured with an electronic drawing compass. The method uses time-ordered compass, pencil, and eraser strokes to reconstruct arcs, lines, centers, radii, and intersections, then evaluates whether required construction procedures were followed. Experiments on perpendicular bisector, angle bisector, and regular hexagon tasks show promising accuracy with partial-credit scoring and rejection for uncertain cases.',
      contributions: [
        'Builds a scoring-oriented segmentation and clustering pipeline for mixed compass, pencil, and eraser stroke streams.',
        'Reconstructs geometric primitives and step order from fragmented e-compass input.',
        'Applies rubric-based scoring with partial credit and a rejection option for uncertain cases.',
        'Evaluates the approach on three representative geometric construction tasks with error analysis.'
      ]
    },
    {
      slug: 'automatic-scoring-digitized-handwritten-answers-2026',
      category: 'scoring',
      title: 'Automatic Scoring System for Digitized Handwritten Answers',
      venue: 'IEEE Access',
      year: '2026',
      authors: 'Tomo Asakura, Hung Tuan Nguyen, Thanh-Nghia Truong, Yoichi Tsuchida, Takahiro Yamamoto, Hiroshi Miyazawa, Nam Tuan Ly, Masato Nemoto, Masamitsu Ito, Toshihiko Horie, Keiichi Kaneko, Masaki Nakagawa',
      abstract: '',
      contributions: []
    },
    {
      slug: 'recognition-scoring-handwritten-short-answer-2025',
      category: 'scoring',
      title: 'Automated Recognition and Scoring of Handwritten Short Answer: Insights from Japanese Elementary and Junior High Schools',
      venue: 'ICDAR',
      year: '2025',
      authors: 'Hung Tuan Nguyen, Thanh-Nghia Truong, Nam Tuan Ly, Masaki Nakagawa, Toshihiko Horie',
      abstract: '',
      contributions: []
    },
    {
      slug: 'content-based-similarity-descriptive-answers-2024',
      category: 'scoring',
      title: 'Content-Based Similarity for Automatic Scoring of Handwritten Descriptive Answers',
      venue: 'ICDAR',
      year: '2024',
      authors: 'Thanh-Nghia Truong, Hung Tuan Nguyen, Nam Tuan Ly, Toshihiko Horie, Masaki Nakagawa',
      abstract: 'This paper introduces content-based similarity for automatic scoring of handwritten descriptive answers in Japanese, English, and mathematical expressions. Online and offline handwriting recognizers produce candidate answers, then the system compares recognized content with expected answers and applies confidence-based rejection to reduce risky scoring. Experiments on elementary school answer collections show that the method can reduce human scoring workload while keeping incorrect automatic positives low.',
      contributions: [
        'Implements similarity-based automatic scoring for handwritten descriptive answers across Japanese, English, and mathematics.',
        'Combines handwriting recognition candidates with expected-answer matching instead of relying only on exact matches.',
        'Adds confidence-based rejection so uncertain cases are routed to human scorers.',
        'Shows reduced human scoring demand while controlling risky false-positive scoring.'
      ]
    },
    {
      slug: 'haimr-lms-handwriting-input-2025',
      category: 'scoring',
      title: 'Enhancing LMS-Based Assessment with Handwriting Input: The Design and Implementation of HAIMR',
      venue: 'CADGME',
      year: '2025',
      authors: 'Thanh-Nghia Truong, Hung Tuan Nguyen, Masaki Nakagawa',
      abstract: 'This paper presents HAIMR, a Moodle plugin for handwritten answer input, management, and recognition. The plugin supports Japanese, English, mathematical expressions, and chemical formulas, allowing learners to write naturally while preserving raw handwriting traces and recognition outputs for later review or scoring. Usability feedback indicates that the interface is intuitive and useful for more authentic digital assessment workflows.',
      contributions: [
        'Designs a Moodle plugin that integrates handwriting input, answer management, and recognition.',
        'Supports multiple answer domains, including Japanese, English, mathematical expressions, and chemical formulas.',
        'Stores handwriting traces and recognition results to support transparent assessment workflows.',
        'Evaluates usability with students and lecturers, identifying both strengths and areas for interface improvement.'
      ]
    },
    {
      slug: 'phd-handwritten-mathematical-expression-recognition-2022',
      category: 'earlier',
      title: 'Handwritten Mathematical Expression Recognition by Deep Neural Networks',
      venue: 'Ph.D. thesis',
      year: '2022',
      authors: 'Thanh-Nghia Truong',
      abstract: '',
      contributions: []
    },
    {
      slug: 'medical-images-sequence-normalization-augmentation-2018',
      category: 'earlier',
      title: 'Medical Images Sequence Normalization and Augmentation: Improve Liver Tumor Segmentation from Small Dataset',
      venue: 'M.Sc. thesis',
      year: '2018',
      authors: 'Thanh-Nghia Truong; related CRC 2018 paper with Vu-Duy Dam and Thanh-Sach Le',
      abstract: '',
      contributions: []
    },
    {
      slug: 'online-video-streaming-elearning-2016',
      category: 'earlier',
      title: 'Building an Online Video Streaming System for E-learning',
      venue: 'B.Sc. thesis',
      year: '2016',
      authors: 'Thanh-Nghia Truong',
      abstract: '',
      contributions: []
    }
  ];

  const categoryLabels = {
    hme: 'Handwritten Mathematical Expression Recognition',
    scoring: 'Automatic Scoring and Educational AI',
    earlier: 'Thesis and Earlier Work'
  };

  const defaultAbstract = 'Abstract will be added here after the official abstract or final manuscript text is confirmed.';
  const defaultContributions = [
    'Problem and motivation: to be added.',
    'Main method or system design: to be added.',
    'Key findings or results: to be added.',
    'Why this matters for later research: to be added.'
  ];
  const defaultAuthorComment = 'Add author notes, limitations, implementation details, follow-up ideas, or personal comments here.';
  const contactEmail = 'thanhnghiadk@gmail.com';

  const script = document.currentScript;
  const rootPrefix = script ? (script.dataset.rootPrefix || '') : '';

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function scholarUrl(title) {
    return `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
  }

  function postUrl(post) {
    return `${rootPrefix}posts/publications/${post.slug}.html`;
  }

  function mailtoUrl(post) {
    const subject = encodeURIComponent(`Comment on publication: ${post.title}`);
    return `mailto:${contactEmail}?subject=${subject}`;
  }

  function contributionItems(post) {
    const items = post.contributions && post.contributions.length ? post.contributions : defaultContributions;
    return items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  }

  function setMeta(selector, attr, value) {
    const node = document.querySelector(selector);
    if (node) node.setAttribute(attr, value);
  }

  function updateHead(post) {
    const title = `${post.title} - Publication Post - Thanh-Nghia Truong`;
    const description = `${post.venue}, ${post.year}. Authors: ${post.authors}.`;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
  }

  function renderPostPage() {
    const slug = document.documentElement.dataset.publicationPost;
    if (!slug) return;

    const post = publications.find((item) => item.slug === slug);
    const article = document.querySelector('[data-publication-post-article]');
    const toc = document.querySelector('[data-publication-post-toc]');
    if (!article) return;

    if (!post) {
      article.innerHTML = '<h1>Publication post not found</h1><p class="lead">The requested publication post is not available.</p>';
      return;
    }

    updateHead(post);
    if (toc) {
      toc.innerHTML = `
        <div class="toc-title">Publication post</div>
        <a href="#abstract">Abstract</a>
        <a href="#contributions">Contributions</a>
        <a href="#access">Paper/code</a>
        <a href="#comments">Comments</a>
      `;
    }

    const paperLink = post.paperUrl || scholarUrl(post.title);
    const codeContent = post.codeUrl
      ? `<a class="access-card" href="${escapeHtml(post.codeUrl)}"><span>Code</span><strong>Open repository</strong></a>`
      : '<div class="access-card is-disabled"><span>Code</span><strong>Add repository link if public</strong></div>';

    article.innerHTML = `
      <div class="post-kicker">${escapeHtml(categoryLabels[post.category] || 'Publication')}</div>
      <h1>${escapeHtml(post.title)}</h1>
      <p class="lead">${escapeHtml(post.venue)}, ${escapeHtml(post.year)}</p>
      <dl class="publication-facts">
        <div><dt>Authors</dt><dd>${escapeHtml(post.authors)}</dd></div>
        <div><dt>Venue</dt><dd>${escapeHtml(post.venue)}</dd></div>
        <div><dt>Year</dt><dd>${escapeHtml(post.year)}</dd></div>
      </dl>

      <h2 id="abstract">Abstract</h2>
      <p>${escapeHtml(post.abstract || defaultAbstract)}</p>

      <h2 id="contributions">Key Contributions</h2>
      <ul class="clean">${contributionItems(post)}</ul>

      <h2 id="access">Paper and Code Access</h2>
      <div class="access-grid">
        <a class="access-card" href="${escapeHtml(paperLink)}"><span>Paper</span><strong>${post.paperUrl ? 'Open paper' : 'Find paper on Google Scholar'}</strong></a>
        ${codeContent}
      </div>

      <h2 id="comments">Comments</h2>
      <section class="comment-panel">
        <h3>Author Comment</h3>
        <p>${escapeHtml(post.authorComment || defaultAuthorComment)}</p>
        <div class="comment-actions">
          <a class="button" href="${escapeHtml(mailtoUrl(post))}">Send a comment</a>
        </div>
        <p class="comment-note">This is a static GitHub Pages site. Public threaded comments can be added later with a service such as Giscus or Utterances after the GitHub repository discussion/issue settings are configured.</p>
      </section>
    `;
  }

  function renderPostList() {
    const mount = document.querySelector('[data-publication-post-list]');
    if (!mount) return;

    const groups = ['hme', 'scoring', 'earlier'].map((category) => {
      const items = publications.filter((post) => post.category === category);
      return `
        <section class="publication-post-group">
          <h3>${escapeHtml(categoryLabels[category])}</h3>
          <div class="post-list">
            ${items.map((post) => `
              <a class="post-item" href="${escapeHtml(postUrl(post))}">
                <div class="post-date">${escapeHtml(post.venue)} · ${escapeHtml(post.year)}</div>
                <h3>${escapeHtml(post.title)}</h3>
                <p>${escapeHtml(post.authors)}</p>
              </a>
            `).join('')}
          </div>
        </section>
      `;
    }).join('');

    mount.innerHTML = groups;
  }

  function enhancePublicationIndex() {
    const items = document.querySelectorAll('.publication');
    if (!items.length) return;

    const byTitle = new Map(publications.map((post) => [post.title, post]));
    items.forEach((item) => {
      const titleNode = item.querySelector('.publication-title');
      if (!titleNode) return;

      const title = titleNode.textContent.trim();
      const post = byTitle.get(title);
      if (!post) return;

      titleNode.innerHTML = `<a href="${escapeHtml(postUrl(post))}">${escapeHtml(post.title)}</a>`;
      const actions = document.createElement('div');
      actions.className = 'publication-actions';
      actions.innerHTML = `
        <a href="${escapeHtml(postUrl(post))}">Post</a>
        <a href="${escapeHtml(scholarUrl(post.title))}">Paper</a>
      `;
      item.appendChild(actions);
    });
  }

  window.PUBLICATION_POSTS = publications;
  renderPostPage();
  renderPostList();
  enhancePublicationIndex();
})();
