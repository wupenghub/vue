<template>
    <div class="photo-list">
        <div class="photo-list-titlebar">
            <div id="slider" class="mui-slider">
                <div id="sliderSegmentedControl"
                     class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a :class="['mui-control-item',item.artId=='0'?'mui-active':'']" href="#item1mobile"
                           data-wid="tab-top-subpage-1.html"
                           @tap="getRequestDate(item.artId)" v-for="item in titleList" :key="item.artId">
                            {{item.title}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <ul class="photo-list-items">
            <li v-for="item in chooseList" :key="item.title">
                <img :src="item.url">
                <div class="info">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="content">
                        {{item.content}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

    export default {
        data() {
            return {
                titleList: [
                    {artId: '0', title: '军事'},
                    {artId: '1', title: '热点'},
                    {artId: '2', title: '北京'},
                    {artId: '3', title: '社会'},
                    {artId: '4', title: '娱乐'},
                    {artId: '5', title: '八卦'}
                ],
                list: [
                    {
                        title: "咋回事？俄36架轰炸机齐出动！美军心里没底40架战机急飞盟国 ",
                        url: '../../images/military/0.jpeg',
                        artId: '0',
                        id: '00',
                        content: '近期美国在俄罗斯周边连续进行多场军演，演习的规模越来越大，参与的国家越来越多，针对俄罗斯的意味非常浓厚。面对美国的挑衅，俄罗斯做出了强力反击，按照普京总统的指示，全面展示了俄罗斯核力量，一次性向欧洲出动了36架战略轰炸机！'
                    },
                    {
                        title: "强力回应！F35完虐S300？俄S400导弹齐射击落来袭目标 ",
                        url: '../../images/military/1.jpeg',
                        artId: '0',
                        id: '01',
                        content: '近日，俄罗斯在叙利亚部署并移交了S-300防空导弹系统，在这一消息传出后，美国的军方频频宣称，美方的F-35隐形战机能够十分容易的摧毁S-300防空系统。虽然国际上一直传出S-300不堪一击，可是却一直不见被摧毁的消息传出，引发各方疑惑。针对此事件，俄罗斯的一位军事专家给出了这样的解释。'
                    },
                    {
                        title: "美核航母携70艘军舰开进半岛，近30年来首次",
                        url: '../../images/military/2.jpeg',
                        artId: '0',
                        id: '02',
                        content: '美俄之间的博弈不断升级，双方都在大秀自己的绝技。美国总体实力上占优，俄罗斯有自己的办法进行应对，绝对是毫不示弱。俄罗斯在叙利亚牢牢掌握主动，伊德利卜这个美军最后的希望正在化为泡影。美军不甘心接受失败开始进行最后的挣扎。美军除了投掷白磷弹这种国际禁用的炸弹袭击当地村民之外，还封锁住人道主义救援线路，让7万余名难民面临被困死的危境。毫无疑问，美国为了自己的利益是不择手段，这个也是西方列强的本质和本色。部分亲西方者羡慕的民主、契约、自由等都是伪装的道具而已。'
                    },
                    {
                        title: "突发！美军战机又对叙利亚狂轰滥炸，俄罗斯强硬发声：必须负责 ",
                        url: '../../images/military/3.jpeg',
                        artId: '0',
                        id: '03',
                        content: '长期以来，美国就是最乐意充当“世界警察”的国家，尤其是喜欢站在国际法的制高点动辄对他国指手画脚说三道四，干预别国的内政。比如在叙利亚，特朗普政府就已经多次已使用“化武”而对该国政府军大肆指责，并以此为由施以军事打击。然而美国的虚伪本质却也由此充分显现了出来，因为美国在这方面是典型的只许州官放火，而不许百姓点灯，在无端指责别国的同时，自己却露出了狰狞的嘴脸。在继稍早之前美国对叙利亚使用白磷弹这一剧毒武器之后，刚刚有消息称，美国又干了一次这种无耻的行径，但立即遭到了俄罗斯的强烈谴责。'
                    },
                    {
                        title: "俄最强导弹被讽发射失败！关键材料遭美卡脖子？专家：美国心虚了 ",
                        url: '../../images/military/4.jpeg',
                        artId: '0',
                        id: '04',
                        content: '超高音速武器成为了世界军事强国争相发展的未来尖端武器，正所谓“天下武功无坚不破，唯快不破”，目前人类还没有找到拦截高超音速武器的有效办法，因此现有的导弹防御体系在其面前基本就是渣渣，随着中国、美国在这一领域展开激烈竞争之后，俄罗斯也后来者居上，先后展示了“匕首”、“先锋”这两款高超音速武器，其服役竟然还比美国领先几年，对此美国似乎又有点酸不拉几，他们开始嘲讽俄罗斯的“先锋”导弹是中看不中用的花架子。'
                    },
                    {
                        title: "此国家因美女泛滥被誉为男人天堂！美女都愁嫁，开放程度令人咂舌 ",
                        url: '../../images/hot/0.jpeg',
                        artId: '1',
                        id: '10',
                        content: '大家都知道，泰国曼谷是一个"性都"，这里的性开放程度在我们看来是不可思议的。白天这里是热闹的海滨城市，有熙熙攘攘的游客，人声鼎沸。而到了晚上这里就变成了一个灯红酒绿，让人沉沦的地方。无数的人在这里沉沦，不愿离开。除了这里之外，近些年还有另外一个东欧小国家的一个城市变成了一个新兴的"性都"，这个城市就是里加，拉脱维亚的首都。'
                    },

                    {
                        title: "北约数万精兵堵门，开火就在一瞬间！普京怒吼：敢动俄罗斯死定了",
                        url: '../../images/hot/1.jpeg',
                        artId: '1',
                        id: '11',
                        content: '北约是当今世界最大的军事集团，该组织自成立以来就以对抗华约组织为目的，华约组织由于苏联的解体而解散后，北约组织依然存在，而对抗的目标则直接指向了俄罗斯。近段，以美国主导的北约国家调兵遣将，重兵集结，在俄罗斯周边磨刀霍霍，已经引发了俄罗斯阵营的高度警惕。而今，北约国家又在俄罗斯边境地区搞了个大动作，一副要向俄罗斯开火之势。'
                    },
                    {
                        title: "“央视一姐”周涛消失3年后，突然变成了大妈，根本无法接受!",
                        url: '../../images/hot/2.jpeg',
                        artId: '1',
                        id: '12',
                        content: '当年周涛为什么离开中央电视台呢？其中的原因让人感叹：太揪心了。从大概6年前，我们基本上在电视屏幕上看不到她的身影了，因为她已经慢慢的辞去了一些节目的主持。原来周涛的女儿患上了自闭症，为何带女儿到处求医，她不得不辞去了一部分的工作，甚至后来直接退出了央视。可怜天下父母心啊，为了孩子付出的太多了。'
                    },
                ],
                chooseList: []
            };
        },
        created() {
            this.getRequestDate(this.$route.query.artId);
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getRequestDate(id) {
                this.chooseList = [];
                for (var i = 0; i < this.list.length; i++) {
                    var obj = this.list[i];
                    if (obj.artId === id) {
                        this.chooseList.push(obj);
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .photo-list {
            .photo-list-items {
                list-style: none;
                margin: 0;
                padding: 0;
                img[lazy=loading] {
                    width: 40px;
                    height: 300px;
                    margin: auto;
                    text-align: center;
                }
                img {
                    width: 100%;
                    vertical-align: middle;
                }
                li {
                    background-color: #ccc;
                    text-align: center;
                    margin-bottom: 10px;
                    box-shadow: 0 0 9px #999;
                    position: relative;
                    img {
                        width: 100%;
                        vertical-align: middle;
                    }
                    img[lazy="loading"] {
                        width: 40px;
                        height: 300px;
                        margin: auto;
                    }
                    .info {
                        color: white;
                        text-align: left;
                        position: absolute;
                        bottom: 0;
                        background-color: rgba(0, 0, 0, 0.4);
                        max-height: 84px;
                        .title {
                            font-size: 14px;
                        }
                        .content {
                            font-size: 13px;
                        }
                    }

                }
        }
    }
</style>