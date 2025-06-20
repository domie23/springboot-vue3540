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
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="驾驶员工号" prop="jiashiyuangonghao">
					<el-input v-model="ruleForm.jiashiyuangonghao" placeholder="驾驶员工号" clearable  :readonly="ro.jiashiyuangonghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="驾驶员工号" prop="jiashiyuangonghao">
					<el-input v-model="ruleForm.jiashiyuangonghao" placeholder="驾驶员工号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="密码" prop="mima">
					<el-input v-model="ruleForm.mima" placeholder="密码" clearable  :readonly="ro.mima"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="密码" prop="mima">
					<el-input v-model="ruleForm.mima" placeholder="密码" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="驾驶员姓名" prop="jiashiyuanxingming">
					<el-input v-model="ruleForm.jiashiyuanxingming" placeholder="驾驶员姓名" clearable  :readonly="ro.jiashiyuanxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="驾驶员姓名" prop="jiashiyuanxingming">
					<el-input v-model="ruleForm.jiashiyuanxingming" placeholder="驾驶员姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="驾驶证号" prop="jiashizhenghao">
					<el-input v-model="ruleForm.jiashizhenghao" placeholder="驾驶证号" clearable  :readonly="ro.jiashizhenghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="驾驶证号" prop="jiashizhenghao">
					<el-input v-model="ruleForm.jiashizhenghao" placeholder="驾驶证号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="性别" prop="xingbie">
					<el-select :disabled="ro.xingbie" v-model="ruleForm.xingbie" placeholder="请选择性别" >
						<el-option
							v-for="(item,index) in xingbieOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="性别" prop="xingbie">
					<el-input v-model="ruleForm.xingbie"
						placeholder="性别" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="驾龄" prop="jialing">
					<el-input v-model="ruleForm.jialing" placeholder="驾龄" clearable  :readonly="ro.jialing"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="驾龄" prop="jialing">
					<el-input v-model="ruleForm.jialing" placeholder="驾龄" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" clearable  :readonly="ro.lianxifangshi"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="驾驶车型" prop="jiashichexing">
					<el-input v-model="ruleForm.jiashichexing" placeholder="驾驶车型" clearable  :readonly="ro.jiashichexing"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="驾驶车型" prop="jiashichexing">
					<el-input v-model="ruleForm.jiashichexing" placeholder="驾驶车型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="职称" prop="zhicheng">
					<el-select :disabled="ro.zhicheng" v-model="ruleForm.zhicheng" placeholder="请选择职称" >
						<el-option
							v-for="(item,index) in zhichengOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="职称" prop="zhicheng">
					<el-input v-model="ruleForm.zhicheng"
						placeholder="职称" readonly></el-input>
				</el-form-item>
			</template>
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
				jiashiyuangonghao : false,
				mima : false,
				jiashiyuanxingming : false,
				jiashizhenghao : false,
				xingbie : false,
				jialing : false,
				lianxifangshi : false,
				jiashichexing : false,
				zhicheng : false,
			},
			
			
			ruleForm: {
				jiashiyuangonghao: '',
				mima: '',
				jiashiyuanxingming: '',
				jiashizhenghao: '',
				xingbie: '',
				jialing: '',
				lianxifangshi: '',
				jiashichexing: '',
				zhicheng: '',
			},
		
			xingbieOptions: [],
			zhichengOptions: [],
			
			rules: {
				jiashiyuangonghao: [
					{ required: true, message: '驾驶员工号不能为空', trigger: 'blur' },
				],
				mima: [
					{ required: true, message: '密码不能为空', trigger: 'blur' },
				],
				jiashiyuanxingming: [
				],
				jiashizhenghao: [
				],
				xingbie: [
				],
				jialing: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				lianxifangshi: [
					{ validator: validateMobile, trigger: 'blur' },
				],
				jiashichexing: [
				],
				zhicheng: [
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
						if(o=='jiashiyuangonghao'){
							this.ruleForm.jiashiyuangonghao = obj[o];
							this.ro.jiashiyuangonghao = true;
							continue;
						}
						if(o=='mima'){
							this.ruleForm.mima = obj[o];
							this.ro.mima = true;
							continue;
						}
						if(o=='jiashiyuanxingming'){
							this.ruleForm.jiashiyuanxingming = obj[o];
							this.ro.jiashiyuanxingming = true;
							continue;
						}
						if(o=='jiashizhenghao'){
							this.ruleForm.jiashizhenghao = obj[o];
							this.ro.jiashizhenghao = true;
							continue;
						}
						if(o=='xingbie'){
							this.ruleForm.xingbie = obj[o];
							this.ro.xingbie = true;
							continue;
						}
						if(o=='jialing'){
							this.ruleForm.jialing = obj[o];
							this.ro.jialing = true;
							continue;
						}
						if(o=='lianxifangshi'){
							this.ruleForm.lianxifangshi = obj[o];
							this.ro.lianxifangshi = true;
							continue;
						}
						if(o=='jiashichexing'){
							this.ruleForm.jiashichexing = obj[o];
							this.ro.jiashichexing = true;
							continue;
						}
						if(o=='zhicheng'){
							this.ruleForm.zhicheng = obj[o];
							this.ro.zhicheng = true;
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
			
            this.xingbieOptions = "男,女".split(',')
            this.zhichengOptions = "有编制,无编制".split(',')
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `jiashiyuan/info/${id}`,
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
				url: "jiashiyuan/page", 
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
					   url: `jiashiyuan/${!this.ruleForm.id ? "save" : "update"}`,
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
						 this.parent.jiashiyuanCrossAddOrUpdateFlag = false;
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
			   url: `jiashiyuan/${!this.ruleForm.id ? "save" : "update"}`,
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
				 this.parent.jiashiyuanCrossAddOrUpdateFlag = false;
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
      this.parent.jiashiyuanCrossAddOrUpdateFlag = false;
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
