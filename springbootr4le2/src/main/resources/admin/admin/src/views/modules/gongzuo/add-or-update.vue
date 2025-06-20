<template>
	<div class="addEdit-block" :style='{"padding":"10px 30px 30px","background":"url(http://codegen.caihongy.cn/20230228/47752d6be3a94e8892a83ec2a70c8443.png)"}' style="width: 100%;">
		<el-form
			:style='{"border":"1px solid #ddd","padding":"30px","boxShadow":"0 0px 0px #ddd","borderRadius":"5px","background":"#ffffff"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="180px"
		>
			<template >
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'" label="派车编号" prop="paichebianhao">
					<el-input v-model="ruleForm.paichebianhao" placeholder="派车编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.paichebianhao" label="派车编号" prop="paichebianhao">
					<el-input v-model="ruleForm.paichebianhao" placeholder="派车编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="出发时间" prop="chufashijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.chufashijian" 
						type="datetime"
						:readonly="ro.chufashijian"
						placeholder="出发时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.chufashijian" label="出发时间" prop="chufashijian">
					<el-input v-model="ruleForm.chufashijian" placeholder="出发时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="到达时间" prop="daodashijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.daodashijian" 
						type="datetime"
						:readonly="ro.daodashijian"
						placeholder="到达时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.daodashijian" label="到达时间" prop="daodashijian">
					<el-input v-model="ruleForm.daodashijian" placeholder="到达时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="出发地点" prop="chufadidian">
					<el-select :disabled="ro.chufadidian" v-model="ruleForm.chufadidian" placeholder="请选择出发地点" >
						<el-option
							v-for="(item,index) in chufadidianOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="出发地点" prop="chufadidian">
					<el-input v-model="ruleForm.chufadidian"
						placeholder="出发地点" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="目的地点" prop="mudedidian">
					<el-select :disabled="ro.mudedidian" v-model="ruleForm.mudedidian" placeholder="请选择目的地点" >
						<el-option
							v-for="(item,index) in mudedidianOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="目的地点" prop="mudedidian">
					<el-input v-model="ruleForm.mudedidian"
						placeholder="目的地点" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="回程时间" prop="huichengshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.huichengshijian" 
						type="datetime"
						:readonly="ro.huichengshijian"
						placeholder="回程时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.huichengshijian" label="回程时间" prop="huichengshijian">
					<el-input v-model="ruleForm.huichengshijian" placeholder="回程时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="乘车人数" prop="chengcherenshu">
					<el-input v-model="ruleForm.chengcherenshu" placeholder="乘车人数" clearable  :readonly="ro.chengcherenshu"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="乘车人数" prop="chengcherenshu">
					<el-input v-model="ruleForm.chengcherenshu" placeholder="乘车人数" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="班级" prop="banji">
					<el-input v-model="ruleForm.banji" placeholder="班级" clearable  :readonly="ro.banji"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="班级" prop="banji">
					<el-input v-model="ruleForm.banji" placeholder="班级" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="带班老师" prop="daibanlaoshi">
					<el-input v-model="ruleForm.daibanlaoshi" placeholder="带班老师" clearable  :readonly="ro.daibanlaoshi"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="带班老师" prop="daibanlaoshi">
					<el-input v-model="ruleForm.daibanlaoshi" placeholder="带班老师" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="教师联系电话" prop="jiaoshilianxidianhua">
					<el-input v-model="ruleForm.jiaoshilianxidianhua" placeholder="教师联系电话" clearable  :readonly="ro.jiaoshilianxidianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="教师联系电话" prop="jiaoshilianxidianhua">
					<el-input v-model="ruleForm.jiaoshilianxidianhua" placeholder="教师联系电话" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="是否需要临时换班" prop="shifouxuyaolinshihuanban">
					<el-select :disabled="ro.shifouxuyaolinshihuanban" v-model="ruleForm.shifouxuyaolinshihuanban" placeholder="请选择是否需要临时换班" >
						<el-option
							v-for="(item,index) in shifouxuyaolinshihuanbanOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="是否需要临时换班" prop="shifouxuyaolinshihuanban">
					<el-input v-model="ruleForm.shifouxuyaolinshihuanban"
						placeholder="是否需要临时换班" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'" label="驾驶员工号" prop="jiashiyuangonghao">
					<el-select :disabled="ro.jiashiyuangonghao" @change="jiashiyuangonghaoChange" v-model="ruleForm.jiashiyuangonghao" placeholder="请选择驾驶员工号">
						<el-option
							v-for="(item,index) in jiashiyuangonghaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.jiashiyuangonghao" label="驾驶员工号" prop="jiashiyuangonghao">
					<el-input v-model="ruleForm.jiashiyuangonghao" placeholder="驾驶员工号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="驾驶员姓名" prop="jiashiyuanxingming">
					<el-input v-model="ruleForm.jiashiyuanxingming" placeholder="驾驶员姓名" clearable  :readonly="ro.jiashiyuanxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="驾驶员姓名" prop="jiashiyuanxingming">
					<el-input v-model="ruleForm.jiashiyuanxingming" placeholder="驾驶员姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="司机联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="司机联系方式" clearable  :readonly="ro.lianxifangshi"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="司机联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="司机联系方式" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="状态" prop="zhuangtai">
					<el-select :disabled="ro.zhuangtai" v-model="ruleForm.zhuangtai" placeholder="请选择状态" >
						<el-option
							v-for="(item,index) in zhuangtaiOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="状态" prop="zhuangtai">
					<el-input v-model="ruleForm.zhuangtai"
						placeholder="状态" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="textarea" v-if="type!='info'" label="车辆申请理由" prop="cheliangshenqingliyou">
					<el-input
					  style="min-width: 200px; max-width: 600px;"
					  type="textarea"
					  :rows="8"
					  placeholder="车辆申请理由"
					  v-model="ruleForm.cheliangshenqingliyou" >
					</el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else-if="ruleForm.cheliangshenqingliyou" label="车辆申请理由" prop="cheliangshenqingliyou">
					<span :style='{"fontSize":"14px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}'>{{ruleForm.cheliangshenqingliyou}}</span>
				</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#337ab7","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"1px solid #1b5a90","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#1b5a90","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"1px solid #1b5a90","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#1b5a90","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				paichebianhao : false,
				chufashijian : false,
				daodashijian : false,
				chufadidian : false,
				mudedidian : false,
				huichengshijian : false,
				chengcherenshu : false,
				banji : false,
				daibanlaoshi : false,
				jiaoshilianxidianhua : false,
				shifouxuyaolinshihuanban : false,
				jiashiyuangonghao : false,
				jiashiyuanxingming : false,
				lianxifangshi : false,
				cheliangshenqingliyou : false,
				zhuangtai : false,
			},
			
			
			ruleForm: {
				paichebianhao: this.getUUID(),
				chufashijian: '',
				daodashijian: '',
				chufadidian: '',
				mudedidian: '',
				huichengshijian: '',
				chengcherenshu: '',
				banji: '',
				daibanlaoshi: '',
				jiaoshilianxidianhua: '',
				shifouxuyaolinshihuanban: '',
				jiashiyuangonghao: '',
				jiashiyuanxingming: '',
				lianxifangshi: '',
				cheliangshenqingliyou: '',
				zhuangtai: '',
			},
		
			chufadidianOptions: [],
			mudedidianOptions: [],
			shifouxuyaolinshihuanbanOptions: [],
			jiashiyuangonghaoOptions: [],
			zhuangtaiOptions: [],
			
			rules: {
				paichebianhao: [
				],
				chufashijian: [
				],
				daodashijian: [
				],
				chufadidian: [
				],
				mudedidian: [
				],
				huichengshijian: [
				],
				chengcherenshu: [
				],
				banji: [
				],
				daibanlaoshi: [
				],
				jiaoshilianxidianhua: [
				],
				shifouxuyaolinshihuanban: [
				],
				jiashiyuangonghao: [
				],
				jiashiyuanxingming: [
				],
				lianxifangshi: [
				],
				cheliangshenqingliyou: [
				],
				zhuangtai: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='paichebianhao'){
							this.ruleForm.paichebianhao = obj[o];
							this.ro.paichebianhao = true;
							continue;
						}
						if(o=='chufashijian'){
							this.ruleForm.chufashijian = obj[o];
							this.ro.chufashijian = true;
							continue;
						}
						if(o=='daodashijian'){
							this.ruleForm.daodashijian = obj[o];
							this.ro.daodashijian = true;
							continue;
						}
						if(o=='chufadidian'){
							this.ruleForm.chufadidian = obj[o];
							this.ro.chufadidian = true;
							continue;
						}
						if(o=='mudedidian'){
							this.ruleForm.mudedidian = obj[o];
							this.ro.mudedidian = true;
							continue;
						}
						if(o=='huichengshijian'){
							this.ruleForm.huichengshijian = obj[o];
							this.ro.huichengshijian = true;
							continue;
						}
						if(o=='chengcherenshu'){
							this.ruleForm.chengcherenshu = obj[o];
							this.ro.chengcherenshu = true;
							continue;
						}
						if(o=='banji'){
							this.ruleForm.banji = obj[o];
							this.ro.banji = true;
							continue;
						}
						if(o=='daibanlaoshi'){
							this.ruleForm.daibanlaoshi = obj[o];
							this.ro.daibanlaoshi = true;
							continue;
						}
						if(o=='jiaoshilianxidianhua'){
							this.ruleForm.jiaoshilianxidianhua = obj[o];
							this.ro.jiaoshilianxidianhua = true;
							continue;
						}
						if(o=='shifouxuyaolinshihuanban'){
							this.ruleForm.shifouxuyaolinshihuanban = obj[o];
							this.ro.shifouxuyaolinshihuanban = true;
							continue;
						}
						if(o=='jiashiyuangonghao'){
							this.ruleForm.jiashiyuangonghao = obj[o];
							this.ro.jiashiyuangonghao = true;
							continue;
						}
						if(o=='jiashiyuanxingming'){
							this.ruleForm.jiashiyuanxingming = obj[o];
							this.ro.jiashiyuanxingming = true;
							continue;
						}
						if(o=='lianxifangshi'){
							this.ruleForm.lianxifangshi = obj[o];
							this.ro.lianxifangshi = true;
							continue;
						}
						if(o=='cheliangshenqingliyou'){
							this.ruleForm.cheliangshenqingliyou = obj[o];
							this.ro.cheliangshenqingliyou = true;
							continue;
						}
						if(o=='zhuangtai'){
							this.ruleForm.zhuangtai = obj[o];
							this.ro.zhuangtai = true;
							continue;
						}
				}
				
















			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.chufadidianOptions = "湖南省长沙市岳麓区学士路湖南中医药大学含浦校区,湖南中医药大学东塘校区,湖南中医药大学湘阴校区".split(',')
            this.mudedidianOptions = "湖南省长沙市岳麓区学士路湖南中医药大学含浦校区,湖南中医药大学东塘校区,湖南中医药大学湘阴校区".split(',')
            this.shifouxuyaolinshihuanbanOptions = "是,否".split(',')
            this.$http({
				url: `option/jiashiyuan/jiashiyuangonghao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.jiashiyuangonghaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
            this.zhuangtaiOptions = "未使用,已使用,已到达,已返程".split(',')
			
		},
			// 下二随
			jiashiyuangonghaoChange () {
				this.$http({
					url: `follow/jiashiyuan/jiashiyuangonghao?columnValue=`+ this.ruleForm.jiashiyuangonghao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.jiashiyuanxingming){
							this.ruleForm.jiashiyuanxingming = data.data.jiashiyuanxingming
						}
						if(data.data.lianxifangshi){
							this.ruleForm.lianxifangshi = data.data.lianxifangshi
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `gongzuo/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {

































var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "gongzuo/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `gongzuo/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.gongzuoCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `gongzuo/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.gongzuoCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.gongzuoCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #666;
	  	  font-weight: 500;
	  	  width: 180px;
	  	  font-size: 16px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 180px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid #5479bb;
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1px solid #5479bb;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1px solid #5479bb;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px dashed #5479bb;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #5479bb;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 120px;
	  	  text-align: center;
	  	  height: 120px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px dashed #5479bb;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #5479bb;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 120px;
	  	  text-align: center;
	  	  height: 120px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px dashed #5479bb;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #5479bb;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 120px;
	  	  text-align: center;
	  	  height: 120px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #5479bb;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: auto;
	  	}
</style>
