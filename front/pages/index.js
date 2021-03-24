const episodes = [
  "https://vcze601.cda.pl/Gs9bHVflOh169yL1o2GlPQ/1616665342/lqf3d205b7f12d3c95396a840fd613b077.mp4",
  "https://vcze305.cda.pl/R9M409XJdEdiVAjMuM_q3g/1616665342/lq174973c171e63a1a84d91480a53dbbfa.mp4",
  "https://vcze603.cda.pl/aUtN4v3zc0DzhI8KEs8UJA/1616665342/lq3a593217d6f9f4ed6df617ac372c7132.mp4",
  "https://vcze302.cda.pl/dBmARnmz6sjg_lClUxkQ5g/1616665342/lqe7c5bdb3a30e13a4e653d7e948869289.mp4",
  "https://vcze302.cda.pl/rZBEZx-_GQuwudLCZz-wZA/1616665342/lq14cd5ee37b617ea64be9ea0f224b8a5e.mp4",
  "https://vcze102.cda.pl/jN-mLRCdGm34W9-j1ZSrBQ/1616665342/lq8585b93e1640d8599435533c808f0227.mp4",
  "https://vcze401.cda.pl/kwsCOEX2xK0Ya-XCYi2ZQA/1616665342/lqfc84d95d04168d53227a5633c7d99591.mp4",
  "https://vcze603.cda.pl/XRKrL2UXtbM-UrOuM2S59A/1616665342/lq431f424d75b92a0781663a8c4ae88562.mp4",
  "https://vcze404.cda.pl/DMRxY11dUzfpBHYElDmlKA/1616665342/lq063f0e9e4eda6adc79bbcb9c1206ff13.mp4",
  "https://vcze601.cda.pl/N4LJpoYO4LtkhSXKGcLckw/1616665342/lqaed2bfa186c4bf7a0383fbbd52e4a685.mp4",
  "https://vcze102.cda.pl/fXRfVJc8II5U4tOMN7j4qA/1616665342/lqfe6b2c53f24eba13c5c0242aa356e6bd.mp4",
  "https://vcze304.cda.pl/ZbiaIwNzgNUrp6W4ufIf8w/1616665342/lq36f0499a05d1f5d0869cfb2d8c8e6126.mp4",
  "https://vcze304.cda.pl/Vv21Qu43AiLVMHpbMJAlpQ/1616665342/lqa2655d9380e71836dd7d18b1dbbce21b.mp4",
  "https://vcze703.cda.pl/9itr2DYQ8gvIMGT6z7I9lA/1616665342/lqc280456b6e9ec791b9418aae6fee7943.mp4",
  "https://vcze303.cda.pl/zhlVM1FFPCXMg_5Y6byVKg/1616665342/lqe3f3fe335964930a4798e8c1d94fb77f.mp4",
  "https://vcze701.cda.pl/EPQaYbQV1rPNYmn4J272cA/1616665342/lqf237f5a7a2780f83ea9e48071795861c.mp4",
  "https://vcze402.cda.pl/AoXVK29heWCZMlcnV5xCyQ/1616665342/lq40f90a7298f75bacbc89fa396dca5a19.mp4",
  "https://vcze405.cda.pl/GsbyU5EAjKfKmUz8xExy0g/1616665342/lqf6ea398be520964f45b6d94472c7a683.mp4",
  "https://vcze106.cda.pl/rNFt0mvMlmjaeAk2skoIuA/1616665342/lq540bb196818d1f4696539b3d5da97cce.mp4",
  "https://vcze101.cda.pl/_G9jqGFCDSr4oqPG_SIbWg/1616665342/lqf65c280a8d07c9e3caded939853dc922.mp4",
  "https://vcze403.cda.pl/kH3zzTXHkG9zBbjqFRzToA/1616665342/lq0c2b9b83a7ac430fa50cd523d952c3cd.mp4",
  "https://vcze703.cda.pl/3YTnx2pscb-SyaZE3_ZUkA/1616665342/lq24f7aa0bd7e84a4a4e86f49748797ad7.mp4",
  "https://vcze103.cda.pl/WtLlcDK9QXh73z807DoINw/1616665342/lq009a60742dcbdfd3b8127116ac97f032.mp4",
  "https://vcze112.cda.pl/I9FFmM3CdRLHQWe54SHBOg/1616665342/lq521f32fe88f3b8ebd11664d8c325ba91.mp4",
];

export default function Home() {
  return (
    <div style={{ fontSize: 40 }}>
      {episodes.map((ep, i) => (
        <div>
          <a href={ep} key={i}>
            Odcinek {i + 1}
          </a>
        </div>
      ))}
    </div>
  );
}
